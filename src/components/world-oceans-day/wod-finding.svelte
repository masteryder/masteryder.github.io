<script lang="ts">
  import type Image from './_image';
  
  export let className: string;
  export let id: string;
  export let image: Image;
  export let invert: boolean = false;
  export let title: string;
  export let subtitle: string;
  export let text: string;
  export let link: string;
  export let link_text: string = 'Dive deeper';

</script>

<div class="wod-finding row {className}" {id}>
  <div class="col-lg-6 col-12{invert ? 'order-lg-2' : ''}">
    <img class="wod-finding-artist-photo" src="{image.src}" alt="{image.alt}" />
  </div>
  <div class="content-col col-lg-6 col-12{invert ? ' order-lg-1': ''}">
    <div class="wod-finding-title cursive-italic underwater-text">{title}</div>
    <div class="wod-finding-subtitle">{subtitle}</div>
    <div class="wod-finding-text underwater-text">{text}</div>
    <a class="wod-finding-dive-deeper-link" href="{link}"><div class="wod-finding-dive-deeper">{link_text}</div></a>
  </div>
</div>