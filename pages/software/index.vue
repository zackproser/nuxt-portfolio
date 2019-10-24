<template>
  <div>
    <nav-links />
    <exhibit prefix="software" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import NavLinks from '~/components/Nav.vue'
import Exhibit from '~/components/Exhibit.vue'

import CanyonRunner from 'html-loader!~/assets/articles/software/html5-canyonrunner.html'

const writings = [
  {
    title: 'A complete HTML5 game built with Phaser.js: CanyonRunner',
    slug: 'html5-desktop-and-mobile-game-canyonrunner',
    description: 'Deep dive into my open sourced HTML5 game',
    body: CanyonRunner,
    image: '/img/wikka.png'
  }
]

export default {
  name: 'Software',
  components: {
    NavLinks,
    Exhibit
  },
  props: ['slug'],
  data() {
    return {
      posts: writings
    }
  }
}
</script>

<style>
.post-view__content p img:nth-of-type(1) {
  margin-top: 30px;
}
</style>
