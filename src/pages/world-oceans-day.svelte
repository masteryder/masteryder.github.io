<script lang="ts">
import DepthIndicator from "../components/world-oceans-day/depth-indicator.svelte";

  const assets_folder:String = 'https://www.blancpain.com/sites/default/files/landing-page-wod-2021';
  const local_wod_folder:String = '';
</script>


<section class="intro-section wod-section" style="background-image: url('{assets_folder}/Head-Surface_All.png');">
  <div id="dive-into-text" class="intro-text-left cursive-italic">
    <div class="dive-into-full">
      <p>Dive into</p>
      <p>our Ocean</p>
      <p>Commitment</p>
    </div>
  </div>

  <div class="container" id="intro-banner-container">
    <div class="intro-banner">
      <div>
        <a href="https://www.blancpain-ocean-commitment.com/" target="_blank"><img class="logo-boc" src="{assets_folder}/logo-boc.svg" alt="Blancpain Ocean Commitment"/></a>
      </div>

      <div class="intro-banner-middle-text">
        <span class="intro-text-right--first cursive-italic">Wold Oceans Day is</span>
        <span class="intro-text-right--second">Live now</span>
        <div class="play-button"><a href="https://unworldoceansday.org/" target="_blank"><img src="{assets_folder}/Play_Button.svg" alt="Play"></a></div>
      </div>
      <div>
        <a href="https://unworldoceansday.org/" target="_blank"><img src="{assets_folder}/world-ocean-day-logo.svg" class="wod-logo" alt="World Oceans Day" /></a>
      </div>
    </div>
  </div>
</section>

<div class="underwater-sections">
<section class="underwater-section-1">
  <img class="rays-image-1" src="{assets_folder}/Head_Light-Front.png">
  <DepthIndicator id={"first-indication"} value={0} first={true}></DepthIndicator>

  <div class="fluid-canvas" id="bubbles-canvas"></div>

  <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div></div>
    <div id="underwater-intro-wrapper">
      <DepthIndicator id={"intro-indication"} value={7}></DepthIndicator>

      <div id="underwater-intro-text" class="underwater-text cursive-italic underwater-intro-text">
        <p>Blancpain is proud to be presenting partner of the United Nations World Oceans Day 2021.</p>
        <p>On 8 June, we focus attention on the ocean, its essential role in our lives, our duty to protect its many wonders, and on how we can achieve that goal.</p>
      </div>
    </div>
  <div class="squared-circle-separator"><img src="{assets_folder}/separator_squared_circle.png" alt="Separator"></div>
  <div id="underwater-sharks">
    <DepthIndicator id={"sharks-indication"} value={12}></DepthIndicator>
    <div>
      <img src="{local_wod_folder}/Sharks.png" alt="Sharks facing upwards">
    </div>
  </div>
</section>
<section class="underwater-section-2">
  <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div></div>

  <div class="why-section-wrapper">
    <DepthIndicator id={"why-indication"} value={18}></DepthIndicator>

    <div class="why-section">
      <div class="why-circle"><div class="why-circle-rotate" style="background-image: url('{assets_folder}/Circle_2.png');"></div></div>
      <div class="why-title underwater-text cursive-italic">Why?</div>
      <div id="why-text" class="why-text d-none d-lg-block underwater-text">Exploration and preservation of the world’s oceans is core to Blancpain. With its almost 70-year legacy of the Fifty Fathoms diving watch, the Brand has woven close ties with the explorers, photographers, scientists, and environmentalists who treasure this precious resource. With that affinity has come a determination to support important activities and initiatives dedicated to the oceans. Thus was born the Blancpain Ocean Commitment (BOC).</div>
    </div>
  </div>

  <div id="why-text-mobile" style="margin-top: -38px; max-width: 350px;" class="ml-auto mr-auto text-center d-block d-lg-none underwater-text">Exploration and preservation of the world’s oceans is core to Blancpain. With its almost 70-year legacy of the Fifty Fathoms diving watch, the Brand has woven close ties with the explorers, photographers, scientists, and environmentalists who treasure this precious resource. With that affinity has come a determination to support important activities and initiatives dedicated to the oceans. Thus was born the Blancpain Ocean Commitment (BOC).</div>

  <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div></div>
  <div class="how-section-wrapper">
    <DepthIndicator id={"how-indication"} value={21}></DepthIndicator>
      <div class="how-section">
        <div class="how-circle" style="background-image: url('{assets_folder}/Circle_1.png');"></div>
        <div class="how-title underwater-text cursive-italic">How?</div>
        <div id="how-text" class="how-text d-none d-lg-block underwater-text">For the past several years, the BOC has demonstrated consistent support for oceanographic initiatives and partnerships with leading organisations, such as the Pristine Seas expeditions, Laurent Ballesta’s Gombessa project, the World Ocean Initiative organised by The Economist, and the World Oceans Day, an annual event hosted by the United Nations Division for Ocean Affairs and the Law of the Sea (DOALOS). To date, the multiple activities passionately pursued by Blancpain in support of exploring and preserving the oceans have led to tangible results, notably contributing to significantly extending the surface of marine protected areas around the world, with an addition of more than 4 million km2.</div>
      </div>
    </div>

    <div id="how-text-mobile"  style="margin-top: -56px; max-width: 350px;" class="ml-auto mr-auto text-center d-block d-lg-none underwater-text">For the past several years, the BOC has demonstrated consistent support for oceanographic initiatives and partnerships with leading organisations, such as the Pristine Seas expeditions, Laurent Ballesta’s Gombessa project, the World Ocean Initiative organised by The Economist, and the World Oceans Day, an annual event hosted by the United Nations Division for Ocean Affairs and the Law of the Sea (DOALOS). To date, the multiple activities passionately pursued by Blancpain in support of exploring and preserving the oceans have led to tangible results, notably contributing to significantly extending the surface of marine protected areas around the world, with an addition of more than 4 million km2.</div>

    <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div>
  </div>

  <div class="gombessa-introduction" id="gombessa-introduction">
    <DepthIndicator id={"gombessa-indication"} value={24}></DepthIndicator>
    <div id="gombessa-text">
      <div class="gombessa-introduction-subtitle underwater-text cursive-italic">Laurent Ballesta's Gombessa Expeditions</div>
    </div>
  </div>

  <div class="big-big-title-wrapper">
    <div id="explore-title" class="big-big-title wod-text-darker cursive-italic">Explore</div>
  </div>

  <div class="container-wrapper">    
    <DepthIndicator id={"coelecanth-indication"} value={29}></DepthIndicator>

    <div class="container" id="container-explore">
        {%
        include '@blancpain_landing_page_wod/../components/wod-finding-2/wod-finding-2.twig' with {
          image: {
            alt: 'Gombessa I Expeditions © Laurent Ballesta'|t,
            src: blancpain_folder~'/fact2/Gombessa-I.jpg',
          },
          title: 'A meeting with the Coelacanth'|t,
          subtitle: 'Gombessa I'|t,
          subSubtitle: '2013'|t,
          text: "Laurent Ballesta's Gombessa project has completed 5 major scientific expeditions studying some of the rarest, most elusive marine creatures on Earth. In 2013, on Gombessa I, the team met perhaps the most legendary ocean creature of all: the “living fossil” and survivor of 400 million years that is the coelacanth. Locally known as Gombessa, this legendary species gave its name to the Gombessa Expeditions."|t,
          link: 'https://www.blancpain-ocean-commitment.com/scientific-expeditions/gombessa',
          id:'explore-row-1'
      }%}
    </div>
  </div>

  <div class="container">
        {% include '@blancpain_landing_page_wod/../components/wod-finding-2/wod-finding-2.twig' with {
        invert: true,
        image: {
          alt: 'Gombessa 4 Expeditions © Laurent Ballesta'|t,
          src: blancpain_folder~'/fact2/Gombessa-IV.jpg',
        },
        title: '700 Sharks into the Dark'|t,
        subtitle: 'Gombessa IV'|t,
        subSubtitle: '2017'|t,
        text: "In 2017, on Gombessa IV, 3000 hours of night-diving brought to light an incredible, mesmerizing world never seen before. For the first time in history, we witness the beautiful and spectacular sight of hundreds of grey reef sharks collaboratively hunting in packs."|t,
        link: 'https://www.blancpain-ocean-commitment.com/scientific-expeditions-0',
        id:'explore-row-2'
      }%}
  </div>


  <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div></div>

    <div class="big-big-title-wrapper">
    <div id="discover-title" class="big-big-title wod-text-darker cursive-italic">{{'Discover'|t}}</div>
  </div>

  <div id="carousel-intro-container-wrapper">
    {% include '@blancpain_landing_page_wod/../components/depth-indicator/depth-indicator.twig' with {
      id: 'carousel-indication',
      value: 35,
      }
    %}
    <div id="carousel-intro-container">
      <div id="discover-row-1" class="cursive-italic underwater-text text-center" style="margin-bottom: 12px; font-size: 26px; max-width: 465px; margin-left: auto; margin-right: auto;">
        {{'Edition Fifty Fathoms'|t}}
      </div>
      <div id="discover-text" class="underwater-text text-center" style="margin-bottom: 8px;">
        {{'Blancpain believes that people can only respect and protect what they love, and can only love what they know. Public awareness is vital to preserving and protecting the world oceans, therefore Blancpain has collaborated with 50 renowned underwater photographers. Across the 12 issues of Edition Fifty Fathoms and exhibitions all around the world, they have shared the wonders of the underwater world.'|t}}
      </div>
      <a class="wod-finding-dive-deeper-link d-block" style="margin-bottom: 20px;" href="https://www.blancpain-ocean-commitment.com/fifty-fathoms/books">
        <div class="m-auto wod-finding-dive-deeper">
          {{'Dive deeper'|t}}
        </div>
      </a>
    </div>
  </div>

  <div id="carousel-discover-wrapper" class="zindex-4">
    <div class="splide" id="carousel-discover">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_1.png 50w,
                {{blancpain_folder}}/carousel/Carousel_1.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_1@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_1.png"
              alt="{{'Edition Fifty Fathoms 2012 © Laurent Ballesta'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                  {{blancpain_folder}}/carousel/l_Carousel_2.png 50w,
                  {{blancpain_folder}}/carousel/Carousel_2.jpg 900w,
                  {{blancpain_folder}}/carousel/Carousel_2@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_2.png"
              alt="{{'Edition Fifty Fathoms 2009 © Amos Nachoum'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                  {{blancpain_folder}}/carousel/l_Carousel_3.png 50w,
                  {{blancpain_folder}}/carousel/Carousel_3.jpg 900w,
                  {{blancpain_folder}}/carousel/Carousel_3@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_3.png"
              alt="{{'Edition Fifty Fathoms 2009 © Doug Perrine'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_4.png 50w,
                {{blancpain_folder}}/carousel/Carousel_4.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_4@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_4.png"
              alt="{{'Edition Fifty Fathoms 2009 © Norbert Probst'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_5.png 50w,
                {{blancpain_folder}}/carousel/Carousel_5.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_5@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_5.png"
              alt="{{'Edition Fifty Fathoms 2012 © Keri Wilk'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_6.png 50w,
                {{blancpain_folder}}/carousel/Carousel_6.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_6@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_6.png"
              alt="{{'Edition Fifty Fathoms 2016 © Ellen Cuylaerts'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_7.png 50w,
                {{blancpain_folder}}/carousel/Carousel_7.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_7@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_7.png"
              alt="{{'Edition Fifty Fathoms 2016 © Tony Wu'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_8.png 50w,
                {{blancpain_folder}}/carousel/Carousel_8.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_8@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_8.png"
              alt="{{'Edition Fifty Fathoms 2019 © Ace Wu'|t}}"/>
          </li>
          <li class="splide__slide">
            <img class="carousel_image"
              data-splide-lazy-srcset="
                {{blancpain_folder}}/carousel/l_Carousel_9.png 50w,
                {{blancpain_folder}}/carousel/Carousel_9.jpg 900w,
                {{blancpain_folder}}/carousel/Carousel_9@2x.png 1800w"
              sizes="(max-width: 900px) 900px,
                    1800px"
              data-splide-lazy="{{blancpain_folder}}/carousel/Carousel_9.png"
              alt="{{'Edition Fifty Fathoms 2019 © Henley Spiers'|t}}"/>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="vertical-line-separation-wrapper pb-0"><div class="vertical-line-separation"></div></div>

  <div class="big-big-title-wrapper">
    <div id="preserve-title" class="big-big-title wod-text-darker cursive-italic">{{'Preserve'|t}}</div>
  </div>


  <div class="container-wrapper">
    {% include '@blancpain_landing_page_wod/../components/depth-indicator/depth-indicator.twig' with {
      id: 'saving-shark-indication',
      value: 39,
      }
    %}
    <div class="container" id="container-preserve">

      {% include '@blancpain_landing_page_wod/../components/wod-finding/wod-finding.twig' with {
        image: {
          alt: 'Mokarran Protection Society © Thomas Pavy'|t,
          src: blancpain_folder~'/fact1/1-Mokarran.jpg',
        },
        title: 'Saving the largest and most emblematic species of hammerhead sharks'|t,
        subtitle: 'Mokarran Protection Society'|t,
        text: 'The Mokarran Protection Society is dedicated to studying, understanding and protecting the great hammerhead shark in French Polynesia, a species that is both little known and critically endangered. In January 2020, Blancpain President & CEO Marc A. Hayek travelled to Rangiroa to participate as a volunteer underwater videographer. The project continued this year with the support of Laurent Ballesta and his Gombessa team.'|t,
        link: 'https://www.blancpain-ocean-commitment.com/preservation/studying-understanding-and-protecting-great-hammerhead-french-polynesia',
        id:'preserve-row-1'
      }%}
    </div>
  </div>

  <div class="container">
      <div class="diamond-separator"><img src="{{assets_folder}}/separator_diamond.png" alt="{{'Separator'|t}}"></div>

      {% include '@blancpain_landing_page_wod/../components/wod-finding/wod-finding.twig' with {
        invert: true,
        image: {
          alt: 'Pristine Seas, Palau © Manu San Felix - National Geographic'|t,
          src: blancpain_folder~'/fact1/2-Pristine.jpg',
        },
        title: 'Helping protect 4 million km2 of ocean'|t,
        subtitle: 'Pristine Seas Expeditions'|t,
        text: "Blancpain has been the founding partner of the Pristine Seas Expeditions. Dedicated to exploring and protecting the precious few remaining truly unspoiled, wild ocean areas on Earth, Pristine Seas has completed 14 major scientific expeditions with Blancpain's support. Marine Protected Areas totalling more than 4 million km2 have been established in 11 of these regions."|t,
        link: 'https://www.blancpain-ocean-commitment.com/scientific-expeditions/pristine-seas',
        class: 'finding-bottom-spacing',
        id:'preserve-row-2'

      }%}
  </div>

  <div class="container-wrapper">
    {% include '@blancpain_landing_page_wod/../components/depth-indicator/depth-indicator.twig' with {
      id: 'bring-coral-indication',
      value: 43,
      }
    %}
    <div class="container" id="bring-coral-container">
      {% include '@blancpain_landing_page_wod/../components/wod-finding/wod-finding.twig' with {
          image: {
            alt: 'Fregate Island © Blancpain Chris Keller'|t,
            src: blancpain_folder~'/fact1/3-FregateIsland.jpg',
          },
          title: 'Bringing coral back to the reefs'|t,
          subtitle: 'Fregate Island Private & Coralive'|t,
          text: 'Around Fregate Island in the Seychelles, large parts of the reef had suffered great damage. In 2018, Blancpain initiated an experimental coral restoration project using the Mineral Accretion Technology, in collaboration with Coralive.org. The project included the scan of more than 700 hectares of seabed to establish a biodiversity baseline of the coral reef. The latest phase of the experiment focuses on the possibility to scale up to much larger areas at longer distances from land.'|t,
          link: 'https://www.blancpain-ocean-commitment.com/preservation/conservation-around-fregate-island',
          id:'preserve-row-3'
        }%}
      </div>
  </div>

  <div class="container">

    <div class="cadran-separator"><img src="{{assets_folder}}/Cadran.png" alt="{{'Separator'|t}}"></div>

    {% include '@blancpain_landing_page_wod/../components/wod-finding/wod-finding.twig' with {
      invert: true,
      image: {
        alt: 'Pangatalan'|t,
        src: blancpain_folder~'/fact1/4-Pangatalan.jpg',
      },
      title: 'Rebirth of an Island'|t,
      subtitle: 'Pangatalan'|t,
      text: 'Pangatalan is a small Island located in the Philippines. Blancpain is supporting the efforts of the local Sulubaaï Environmental Foundation to conserve, protect and restore its resources through environmentally sustainable practices and active ecosystems restoration. In the “Pangatalan: Rebirth of an Island” documentary, we catch a glimpse of a unique beauty that is truly worth saving.'|t,
      link: 'https://www.blancpain-ocean-commitment.com/preservation/pangatalan',
      id:'preserve-row-4'
    }%}
  </div>

  <div class="vertical-line-separation-wrapper"><div class="vertical-line-separation"></div></div>
</section>

<section class="underwater-section-3">
  <div class="big-big-title-wrapper">
    <div id="fifty-title" class="big-big-title wod-text-black cursive-italic">{{'Fifty<br>Fathoms'|t}}</div>
  </div>

  <div id="discover-watch-section">
    <div id="fifty-row-1">
      <div class="zindex-2 mx-auto center-block fifty-intro-title underwater-text cursive-italic">{{'Discover the Fifty Fathoms'|t}}</div>
      <div class="zindex-2 center-block fifty-intro-subtitle">{{'Collection'|t}}</div>
    </div>

    <div id="watch-anim-container-wrapper">
    {% include '@blancpain_landing_page_wod/../components/depth-indicator/depth-indicator.twig' with {
      id: 'ff-depth-indication',
      value: 50,
      }
    %}
      <div id="watch-anim-container">
        <img src="{{assets_folder}}/anim/Watche_Graphics-5.png" alt="{{'Animation'|t}}"/>
        <div class="anim-item non-selectable" id="anim-inner-circle">
          <img src="{{assets_folder}}/anim/Watche_Graphics-4.png" alt="{{'Animation'|t}}" />
        </div>
        <div class="anim-item non-selectable" id="anim-cadran">
          <img src="{{assets_folder}}/anim/Watche_Graphics-3.png" alt="{{'Animation'|t}}"/>
        </div>
        <div class="anim-item non-selectable" id="anim-diamond">
          <img src="{{assets_folder}}/anim/Watche_Graphics-2.png" alt="{{'Animation'|t}}"/>
        </div>
        <div class="anim-item non-selectable" id="anim-squared-circle">
          <img src="{{assets_folder}}/anim/Watche_Graphics-1.png" alt="{{'Animation'|t}}"/>
        </div>
        <div class="anim-item" id="anim-watch">
          <img src="{{assets_folder}}/anim/Watche_img.png" class="watch-image" alt="{{'Fifty Fathoms Automatique'|t}}" />
        </div>
      </div>
    </div>
    <div id="watch-anim-description-wrapper">
      <div class="center-block underwater-text discover-watch-text">{{"Unveiled in 1953, the legendary Fifty Fathoms - the world's first modern diving watch - embodies Blancpain's passion for the underwater world."|t}}</div>
      <a class="wod-finding-dive-deeper-link d-block discover-watch-link" href="{{ path('entity.node.canonical', { 'node': '1002' }) }}"><div class="m-auto wod-finding-dive-deeper">{{'Discover'|t}}</div></a>
    </div>
  </div>
  <a href="https://www.blancpain-ocean-commitment.com/" target="_blank"><img class="mx-auto d-block logo-boc boc-logo" alt="{{'Blancpain Ocean Commitment'|t}}"  src="{{assets_folder}}/logo-boc.svg"/></a>

  <a class="wod-finding-dive-deeper-link d-block discover-watch-link" href="/{{cur_lang_code}}/newsletter"><div class="m-auto wod-finding-dive-deeper">{{'Stay in touch'|t}}</div></a>

  <a href="https://www.instagram.com/blancpain1735/" target="_blank"><img class="mx-auto d-block" style="margin-bottom: 15px;" src="{{assets_folder}}/Logo-Instagram.png" alt="{{'Instagram'|t}}"/></a>
  <div class="mx-auto cursive-italic wod-instagram-text" style="padding-bottom: 115px;">{{'Follow Blancpain on Instagram'|t}}</div>

</section>
</div>