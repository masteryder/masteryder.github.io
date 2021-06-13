
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
    // at the end of hydration without touching the remaining nodes.
    let is_hydrating = false;
    const nodes_to_detach = new Set();
    function start_hydrating() {
        is_hydrating = true;
    }
    function end_hydrating() {
        is_hydrating = false;
        for (const node of nodes_to_detach) {
            node.parentNode.removeChild(node);
        }
        nodes_to_detach.clear();
    }
    function append(target, node) {
        if (is_hydrating) {
            nodes_to_detach.delete(node);
        }
        if (node.parentNode !== target) {
            target.appendChild(node);
        }
    }
    function insert(target, node, anchor) {
        if (is_hydrating) {
            nodes_to_detach.delete(node);
        }
        if (node.parentNode !== target || (anchor && node.nextSibling !== anchor)) {
            target.insertBefore(node, anchor || null);
        }
    }
    function detach(node) {
        if (is_hydrating) {
            nodes_to_detach.add(node);
        }
        else if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                start_hydrating();
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            end_hydrating();
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.38.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/components/0-quarks/Tailwind.svelte generated by Svelte v3.38.0 */

    function create_fragment$1(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tailwind", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tailwind> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Tailwind extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tailwind",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.38.0 */
    const file = "src/App.svelte";

    function create_fragment(ctx) {
    	let tailwind;
    	let t0;
    	let main;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let span;
    	let t5;
    	let t6;
    	let div14;
    	let div12;
    	let div2;
    	let t8;
    	let div3;
    	let i0;
    	let t9;
    	let a0;
    	let t11;
    	let div4;
    	let i1;
    	let t12;
    	let a1;
    	let t14;
    	let div5;
    	let i2;
    	let t15;
    	let a2;
    	let t17;
    	let div6;
    	let i3;
    	let t18;
    	let a3;
    	let t20;
    	let div7;
    	let i4;
    	let t21;
    	let a4;
    	let t23;
    	let div8;
    	let i5;
    	let t24;
    	let i6;
    	let t25;
    	let t26;
    	let div9;
    	let t28;
    	let div10;
    	let i7;
    	let t29;
    	let a5;
    	let t31;
    	let div11;
    	let i8;
    	let t32;
    	let a6;
    	let t34;
    	let div13;
    	let img;
    	let img_src_value;
    	let t35;
    	let h2;
    	let t37;
    	let p0;
    	let t39;
    	let p1;
    	let t40;
    	let a7;
    	let t42;
    	let a8;
    	let t44;
    	let a9;
    	let t46;
    	let a10;
    	let t48;
    	let a11;
    	let t50;
    	let t51;
    	let p2;
    	let t52;
    	let a12;
    	let t54;
    	let t55;
    	let p3;
    	let t56;
    	let a13;
    	let t58;
    	let a14;
    	let t60;
    	let current;
    	tailwind = new Tailwind({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(tailwind.$$.fragment);
    			t0 = space();
    			main = element("main");
    			div0 = element("div");
    			div0.textContent = "Hello World!";
    			t2 = space();
    			div1 = element("div");
    			t3 = text("My name is ");
    			span = element("span");
    			span.textContent = "João Filipe Ventura Coelho";
    			t5 = text(" and this would be where I'd put my Portfolio if I had one.");
    			t6 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div2 = element("div");
    			div2.textContent = "My links and stuff";
    			t8 = space();
    			div3 = element("div");
    			i0 = element("i");
    			t9 = text(" Here's my ");
    			a0 = element("a");
    			a0.textContent = "Linkedin";
    			t11 = space();
    			div4 = element("div");
    			i1 = element("i");
    			t12 = text(" Here's my ");
    			a1 = element("a");
    			a1.textContent = "Github";
    			t14 = space();
    			div5 = element("div");
    			i2 = element("i");
    			t15 = text(" Here's my ");
    			a2 = element("a");
    			a2.textContent = "Codepen";
    			t17 = space();
    			div6 = element("div");
    			i3 = element("i");
    			t18 = text(" Here's my ");
    			a3 = element("a");
    			a3.textContent = "itch.io page";
    			t20 = space();
    			div7 = element("div");
    			i4 = element("i");
    			t21 = text(" Here's a ");
    			a4 = element("a");
    			a4.textContent = "link to my credit card information";
    			t23 = space();
    			div8 = element("div");
    			i5 = element("i");
    			t24 = text(" joao-ventura");
    			i6 = element("i");
    			t25 = text("outlook.com (no spam bots allowed >:c)");
    			t26 = space();
    			div9 = element("div");
    			div9.textContent = "Fun Stuff";
    			t28 = space();
    			div10 = element("div");
    			i7 = element("i");
    			t29 = text(" Challenge me in a Clash of Code at ");
    			a5 = element("a");
    			a5.textContent = "codingame.com";
    			t31 = space();
    			div11 = element("div");
    			i8 = element("i");
    			t32 = text(" Challenge me in a CSS Battle at ");
    			a6 = element("a");
    			a6.textContent = "cssbattle.dev";
    			t34 = space();
    			div13 = element("div");
    			img = element("img");
    			t35 = space();
    			h2 = element("h2");
    			h2.textContent = "Some stuff about me";
    			t37 = space();
    			p0 = element("p");
    			p0.textContent = "My name Is João.";
    			t39 = space();
    			p1 = element("p");
    			t40 = text("I was born in Portugal 🇵🇹 and lived there until I was 13 years old. Then, with my parents and my younger sister, we moved to Switzerland 🇨🇭 in 2007, where I started learning french (and a tiny bit of german).\n\t\tEver since I can remember, I loved playing video games. My first console was a ");
    			a7 = element("a");
    			a7.textContent = "Sega Mega Drive (Genesis)";
    			t42 = text(" and my second console (and favorite console of all time) was a ");
    			a8 = element("a");
    			a8.textContent = "Sega Dreamcast";
    			t44 = text(".\n\t\tI can't even estimate the number of hours I spent playing ");
    			a9 = element("a");
    			a9.textContent = "Sonic Adventure 2";
    			t46 = text(", ");
    			a10 = element("a");
    			a10.textContent = "Phantasy Star Online";
    			t48 = text(", ");
    			a11 = element("a");
    			a11.textContent = "Tokio Extreme Racer";
    			t50 = text(", and many more...");
    			t51 = space();
    			p2 = element("p");
    			t52 = text("With that passion came a desire to understand how such games were made. That's why I decided to learn programming by studying computer science at the ");
    			a12 = element("a");
    			a12.textContent = "CPLN";
    			t54 = text(" in Neuchâtel.\n\t\tThere I learnt how a computer worked, how to assemble and disassemble and even repair one, the basics of OOP in C#, the basics of databases in MySQL and how to build a basic website with HTML, CSS and PHP.");
    			t55 = space();
    			p3 = element("p");
    			t56 = text("After that, I wanted to go even further, so I decided to do a ");
    			a13 = element("a");
    			a13.textContent = "Bachelor of Science in Computer Science";
    			t58 = text(" at the ");
    			a14 = element("a");
    			a14.textContent = "HEIA-FR";
    			t60 = text(".");
    			attr_dev(div0, "class", "font-title text-9xl -ml-2 -mt-5 text-blue mb-5");
    			add_location(div0, file, 7, 1, 132);
    			attr_dev(span, "class", "duration-1000 inline-block transform hover:rotate-720 transition-all bg-blue text-yellow font-bold");
    			add_location(span, file, 8, 49, 260);
    			attr_dev(div1, "class", "mb-5 md:w-1/2 text-blue");
    			add_location(div1, file, 8, 1, 212);
    			attr_dev(div2, "class", "-ml-1 bg-white pb-1 text-blue text-4xl mb-5 font-title");
    			add_location(div2, file, 11, 3, 550);
    			attr_dev(i0, "class", "fab fa-linkedin");
    			add_location(i0, file, 12, 79, 722);
    			attr_dev(a0, "class", "underline hover:font-bold");
    			attr_dev(a0, "href", "https://www.linkedin.com/in/joaofvc/");
    			add_location(a0, file, 12, 121, 764);
    			attr_dev(div3, "class", "transform origin-left\tscale-100 hover:scale-110 transition-all");
    			add_location(div3, file, 12, 3, 646);
    			attr_dev(i1, "class", "fab fa-github");
    			add_location(i1, file, 13, 79, 943);
    			attr_dev(a1, "class", "underline hover:font-bold");
    			attr_dev(a1, "href", "https://github.com/masteryder");
    			add_location(a1, file, 13, 119, 983);
    			attr_dev(div4, "class", "transform origin-left\tscale-100 hover:scale-110 transition-all");
    			add_location(div4, file, 13, 3, 867);
    			attr_dev(i2, "class", "fab fa-codepen");
    			add_location(i2, file, 14, 79, 1153);
    			attr_dev(a2, "class", "underline hover:font-bold");
    			attr_dev(a2, "href", "https://codepen.io/masteryder");
    			add_location(a2, file, 14, 120, 1194);
    			attr_dev(div5, "class", "transform origin-left\tscale-100 hover:scale-110 transition-all");
    			add_location(div5, file, 14, 3, 1077);
    			attr_dev(i3, "class", "fab fa-itch-io");
    			add_location(i3, file, 15, 79, 1365);
    			attr_dev(a3, "class", "underline hover:font-bold");
    			attr_dev(a3, "href", "https://masteryder.itch.io/");
    			add_location(a3, file, 15, 120, 1406);
    			attr_dev(div6, "class", "transform origin-left scale-100 hover:scale-110 transition-all");
    			add_location(div6, file, 15, 3, 1289);
    			attr_dev(i4, "class", "far fa-credit-card");
    			add_location(i4, file, 16, 79, 1580);
    			attr_dev(a4, "href", "https://tinyurl.com/5xxxw45w");
    			attr_dev(a4, "class", "underline hover:font-bold");
    			add_location(a4, file, 16, 123, 1624);
    			attr_dev(div7, "class", "transform origin-left scale-100 hover:scale-110 transition-all");
    			add_location(div7, file, 16, 3, 1504);
    			attr_dev(i5, "class", "far fa-envelope");
    			add_location(i5, file, 17, 84, 1826);
    			attr_dev(i6, "class", "fas fa-at");
    			add_location(i6, file, 17, 128, 1870);
    			attr_dev(div8, "class", "transform origin-left\tscale-100 hover:scale-110 transition-all mb-3");
    			add_location(div8, file, 17, 3, 1745);
    			attr_dev(div9, "class", "mb-3 font-bold");
    			add_location(div9, file, 19, 3, 1944);
    			attr_dev(i7, "class", "fas fa-code");
    			add_location(i7, file, 20, 79, 2067);
    			attr_dev(a5, "class", "underline hover:font-bold");
    			attr_dev(a5, "href", "https://www.codingame.com/profile/c342a68e70a7285087cb38a9662c2e1e1654814");
    			add_location(a5, file, 20, 142, 2130);
    			attr_dev(div10, "class", "transform origin-left scale-100 hover:scale-110 transition-all");
    			add_location(div10, file, 20, 3, 1991);
    			attr_dev(i8, "class", "fas fa-code");
    			add_location(i8, file, 21, 79, 2351);
    			attr_dev(a6, "class", "underline hover:font-bold");
    			attr_dev(a6, "href", "https://cssbattle.dev/player/masteryder");
    			add_location(a6, file, 21, 139, 2411);
    			attr_dev(div11, "class", "transform origin-left\tscale-100 hover:scale-110 transition-all");
    			add_location(div11, file, 21, 3, 2275);
    			attr_dev(div12, "class", "md:w-1/2 w-3/4");
    			add_location(div12, file, 10, 2, 518);
    			attr_dev(img, "class", "md:-my-24 my-5");
    			if (img.src !== (img_src_value = "./assets/Mr._Turner_Stock_Image.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Mr. Turner from Fairly OddParents pointing to the top left of the page");
    			add_location(img, file, 24, 3, 2562);
    			attr_dev(div13, "class", "md:w-1/2 w-1/4");
    			add_location(div13, file, 23, 2, 2530);
    			attr_dev(div14, "class", "flex bg-blue text-white pb-5");
    			add_location(div14, file, 9, 1, 473);
    			add_location(h2, file, 27, 2, 2730);
    			add_location(p0, file, 29, 1, 2761);
    			attr_dev(a7, "target", "_blank");
    			attr_dev(a7, "href", "https://en.wikipedia.org/wiki/Sega_Genesis");
    			add_location(a7, file, 35, 81, 3092);
    			attr_dev(a8, "target", "_blank");
    			attr_dev(a8, "href", "https://en.wikipedia.org/wiki/Dreamcast");
    			add_location(a8, file, 35, 243, 3254);
    			attr_dev(a9, "target", "_blank");
    			attr_dev(a9, "href", "https://en.wikipedia.org/wiki/Sonic_Adventure_2");
    			add_location(a9, file, 36, 60, 3400);
    			attr_dev(a10, "target", "_blank");
    			attr_dev(a10, "href", "https://en.wikipedia.org/wiki/Phantasy_Star_Online");
    			add_location(a10, file, 36, 157, 3497);
    			attr_dev(a11, "target", "_blank");
    			attr_dev(a11, "href", "https://en.wikipedia.org/wiki/Tokyo_Xtreme_Racer");
    			add_location(a11, file, 36, 260, 3600);
    			add_location(p1, file, 33, 1, 2792);
    			attr_dev(a12, "target", "_blank");
    			attr_dev(a12, "href", "https://www.cpln.ch/");
    			add_location(a12, file, 39, 152, 3880);
    			add_location(p2, file, 38, 1, 3724);
    			attr_dev(a13, "target", "_blank");
    			attr_dev(a13, "href", "https://www.heia-fr.ch/en/education/bachelor/computer-science-and-communication-systems/");
    			add_location(a13, file, 43, 64, 4233);
    			attr_dev(a14, "target", "_blank");
    			attr_dev(a14, "href", "https://www.heia-fr.ch/");
    			add_location(a14, file, 43, 230, 4399);
    			add_location(p3, file, 42, 1, 4165);
    			attr_dev(main, "class", "svelte-ftn57i");
    			add_location(main, file, 6, 0, 124);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(tailwind, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, div0);
    			append_dev(main, t2);
    			append_dev(main, div1);
    			append_dev(div1, t3);
    			append_dev(div1, span);
    			append_dev(div1, t5);
    			append_dev(main, t6);
    			append_dev(main, div14);
    			append_dev(div14, div12);
    			append_dev(div12, div2);
    			append_dev(div12, t8);
    			append_dev(div12, div3);
    			append_dev(div3, i0);
    			append_dev(div3, t9);
    			append_dev(div3, a0);
    			append_dev(div12, t11);
    			append_dev(div12, div4);
    			append_dev(div4, i1);
    			append_dev(div4, t12);
    			append_dev(div4, a1);
    			append_dev(div12, t14);
    			append_dev(div12, div5);
    			append_dev(div5, i2);
    			append_dev(div5, t15);
    			append_dev(div5, a2);
    			append_dev(div12, t17);
    			append_dev(div12, div6);
    			append_dev(div6, i3);
    			append_dev(div6, t18);
    			append_dev(div6, a3);
    			append_dev(div12, t20);
    			append_dev(div12, div7);
    			append_dev(div7, i4);
    			append_dev(div7, t21);
    			append_dev(div7, a4);
    			append_dev(div12, t23);
    			append_dev(div12, div8);
    			append_dev(div8, i5);
    			append_dev(div8, t24);
    			append_dev(div8, i6);
    			append_dev(div8, t25);
    			append_dev(div12, t26);
    			append_dev(div12, div9);
    			append_dev(div12, t28);
    			append_dev(div12, div10);
    			append_dev(div10, i7);
    			append_dev(div10, t29);
    			append_dev(div10, a5);
    			append_dev(div12, t31);
    			append_dev(div12, div11);
    			append_dev(div11, i8);
    			append_dev(div11, t32);
    			append_dev(div11, a6);
    			append_dev(div14, t34);
    			append_dev(div14, div13);
    			append_dev(div13, img);
    			append_dev(main, t35);
    			append_dev(main, h2);
    			append_dev(main, t37);
    			append_dev(main, p0);
    			append_dev(main, t39);
    			append_dev(main, p1);
    			append_dev(p1, t40);
    			append_dev(p1, a7);
    			append_dev(p1, t42);
    			append_dev(p1, a8);
    			append_dev(p1, t44);
    			append_dev(p1, a9);
    			append_dev(p1, t46);
    			append_dev(p1, a10);
    			append_dev(p1, t48);
    			append_dev(p1, a11);
    			append_dev(p1, t50);
    			append_dev(main, t51);
    			append_dev(main, p2);
    			append_dev(p2, t52);
    			append_dev(p2, a12);
    			append_dev(p2, t54);
    			append_dev(main, t55);
    			append_dev(main, p3);
    			append_dev(p3, t56);
    			append_dev(p3, a13);
    			append_dev(p3, t58);
    			append_dev(p3, a14);
    			append_dev(p3, t60);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tailwind.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tailwind.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(tailwind, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	let name = "João";
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Tailwind, name });

    	$$self.$inject_state = $$props => {
    		if ("name" in $$props) name = $$props.name;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {
            name: 'world'
        }
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
