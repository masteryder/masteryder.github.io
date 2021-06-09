<script lang="ts">
  import type Image from './_image';

  export let className: string;
  export let id: string;
  export let image: Image;
  export let invert: boolean = false;
  export let title: string;
  export let subtitle: string;
  export let subSubtitle: string;
  export let text: string;
  export let link: string;
  export let link_text: string = 'Dive deeper';

</script>

<div class="wod-finding-2 row {className}" {id}>
  <div class="col-lg-8 col-12 wod-finding-2-pic-col{invert ? 'order-lg-2' : ''}">
    <img class="wod-finding-2-artist-photo" src="{image.src}" alt="{image.alt}" />
  </div>
  <div class="wod-finding-2-text-content">
    <div class="wod-finding-2-subtitle">{subtitle}</div>
    <div class="wod-finding-2-title cursive-italic underwater-text">{title}</div>
    <div class="wod-finding-2-sub-subtitle cursive-italic">{subSubtitle}</div>
    <div class="wod-finding-2-text underwater-text">{text}</div>
    <a class="wod-finding-dive-deeper-link wod-finding-2-dive-deeper-link" href="{link}"><div class="wod-finding-dive-deeper">{link_text}</div></a>
  </div>
</div>