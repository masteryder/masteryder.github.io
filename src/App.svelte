<script lang="ts">
  import Tailwind from "./components/0-quarks/Tailwind.svelte";
	let name: String = "João";
</script>

<Tailwind />

<main>
	<div class="font-title text-9xl -ml-2 -mt-5 text-blue mb-5">Hello World!</div>
	<div class="mb-5 md:w-1/2 text-blue">My name is <span class="duration-1000 inline-block transform hover:rotate-720 transition-all bg-blue text-yellow font-bold">João Filipe Ventura Coelho</span> and this would be where I'd put my Portfolio if I had one.</div>
	<div class="flex bg-blue text-white pb-5">
		<div class="md:w-1/2 w-3/4">
			<div class="-ml-1 bg-white pb-1 text-blue text-4xl mb-5 font-title">My links and stuff</div>
			<div class="transform origin-left	scale-100 hover:scale-110 transition-all"><i class="fab fa-linkedin"></i> Here's my <a class="underline hover:font-bold" href="https://www.linkedin.com/in/joaofvc/">Linkedin</a></div>
			<div class="transform origin-left	scale-100 hover:scale-110 transition-all"><i class="fab fa-github"></i> Here's my <a class="underline hover:font-bold" href="https://github.com/masteryder">Github</a></div>
			<div class="transform origin-left	scale-100 hover:scale-110 transition-all"><i class="fab fa-codepen"></i> Here's my <a class="underline hover:font-bold" href="https://codepen.io/masteryder">Codepen</a></div>
			<div class="transform origin-left scale-100 hover:scale-110 transition-all"><i class="fab fa-itch-io"></i> Here's my <a class="underline hover:font-bold" href="https://masteryder.itch.io/">itch.io page</a></div>
			<div class="transform origin-left scale-100 hover:scale-110 transition-all"><i class="far fa-credit-card"></i> Here's a <a href="https://tinyurl.com/5xxxw45w" class="underline hover:font-bold">link to my credit card information</a></div>
			<div class="transform origin-left	scale-100 hover:scale-110 transition-all mb-3"><i class="far fa-envelope"></i> joao-ventura<i class="fas fa-at"></i>outlook.com (no spam bots allowed >:c)</div>

			<div class="mb-3 font-bold">Fun Stuff</div>
			<div class="transform origin-left scale-100 hover:scale-110 transition-all"><i class="fas fa-code"></i> Challenge me in a Clash of Code at <a class="underline hover:font-bold" href="https://www.codingame.com/profile/c342a68e70a7285087cb38a9662c2e1e1654814">codingame.com</a></div>
			<div class="transform origin-left	scale-100 hover:scale-110 transition-all"><i class="fas fa-code"></i> Challenge me in a CSS Battle at <a class="underline hover:font-bold" href="https://cssbattle.dev/player/masteryder">cssbattle.dev</a></div>
		</div>
		<div class="md:w-1/2 w-1/4">
			<img class="md:-my-24 my-5" src="./assets/Mr._Turner_Stock_Image.png" alt="Mr. Turner from Fairly OddParents pointing to the top left of the page" /></div>
		</div>

		<h2>Some stuff about me</h2>

	<p>
		My name Is João.
	</p>

	<p>
		I was born in Portugal 🇵🇹 and lived there until I was 13 years old. Then, with my parents and my younger sister, we moved to Switzerland 🇨🇭 in 2007, where I started learning french (and a tiny bit of german).
		Ever since I can remember, I loved playing video games. My first console was a <a target="_blank" href="https://en.wikipedia.org/wiki/Sega_Genesis">Sega Mega Drive (Genesis)</a> and my second console (and favorite console of all time) was a <a target="_blank" href="https://en.wikipedia.org/wiki/Dreamcast">Sega Dreamcast</a>.
		I can't even estimate the number of hours I spent playing <a target="_blank" href="https://en.wikipedia.org/wiki/Sonic_Adventure_2">Sonic Adventure 2</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Phantasy_Star_Online">Phantasy Star Online</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Tokyo_Xtreme_Racer">Tokio Extreme Racer</a>, and many more...
	</p>
	<p>
		With that passion came a desire to understand how such games were made. That's why I decided to learn programming by studying computer science at the <a target="_blank" href="https://www.cpln.ch/">CPLN</a> in Neuchâtel.
		There I learnt how a computer worked, how to assemble and disassemble and even repair one, the basics of OOP in C#, the basics of databases in MySQL and how to build a basic website with HTML, CSS and PHP.
	</p>
	<p>
		After that, I wanted to go even further, so I decided to do a <a target="_blank" href="https://www.heia-fr.ch/en/education/bachelor/computer-science-and-communication-systems/">Bachelor of Science in Computer Science</a> at the <a target="_blank" href="https://www.heia-fr.ch/">HEIA-FR</a>.
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>