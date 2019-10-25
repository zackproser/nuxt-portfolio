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
import ArticleOptimizer from 'html-loader!~/assets/articles/software/article-optimizer.html'
import PageGobbler from 'html-loader!~/assets/articles/software/pagegobbler-mac-app.html'
import PageGobblerSite from 'html-loader!~/assets/articles/software/pagegobbler-site.html'
import RealtimeHungerMap from 'html-loader!~/assets/articles/software/realtime-hunger-map.html'
import UsernameExtractor from 'html-loader!~/assets/articles/software/username-extractor.html'
import WENodeSDK from 'html-loader!~/assets/articles/software/we-node-sdk.html'
import WEPHPSDK from 'html-loader!~/assets/articles/software/we-php-sdk.html'
import WEPythonSDK from 'html-loader!~/assets/articles/software/we-python-sdk.html'
import Padscoper from 'html-loader!~/assets/articles/software/padscoper.html'
import Wisdomseeker from 'html-loader!~/assets/articles/software/wisdomseeker.html'
import Hashtagblaster from 'html-loader!~/assets/articles/software/hashtag-blaster.html'
import Pageripper from 'html-loader!~/assets/articles/software/pageripper.html'
import CFTerraforming from 'html-loader!~/assets/articles/software/cf-terraforming.html'
import VuePortfolioSite from 'html-loader!~/assets/articles/software/vue-portfolio.html'

const writings = [
  {
    title: 'A complete HTML5 game built with Phaser.js: CanyonRunner',
    slug: 'html5-desktop-and-mobile-game-canyonrunner',
    description: 'Deep dive into my open sourced HTML5 game',
    body: CanyonRunner,
    image: '/img/canyonrunner-blog.png'
  },
  {
    title: 'A powerful and open source content optimizer tool',
    slug: 'free-seo-article-optimizer',
    description: 'A full-stack app leveraging natural language processing',
    body: ArticleOptimizer,
    image: '/img/optimizer-blog.png'
  },
  {
    title: 'A native OSX app for extracting data from websites',
    slug: 'pagegobber-mac-app',
    description: 'I built a Mac OSX app and sold it in the App Store',
    body: PageGobbler,
    image: '/img/pagegobbler-overview.png'
  },
  {
    title: 'A loud and unique marketing site for the Pagegobbler OSX app',
    slug: 'pagegobbler-site',
    description: 'I built an express.js site to advertise my OSX app',
    body: PageGobblerSite,
    image: '/img/gobbler-blog.png'
  },
  {
    title: 'A realtime global visualization of tweets on any given topic',
    slug: 'realtime-hunger-map',
    description:
      'A configurable Twitter application that draws tweets in realtime on a world map',
    body: RealtimeHungerMap,
    image: '/img/twitter-map-blog.png'
  },
  {
    title:
      'An outrageously gory node.js app that extracts Twitter lists for free',
    slug: 'username-extractor',
    description:
      'Sign in via Twitter oAuth and paste the URL of a Twitter list to extract all usernames from',
    body: UsernameExtractor,
    image: '/img/extractor-blog.png'
  },
  {
    title: 'The first Node.js SDK for the WealthEngine API',
    slug: 'wealthengine-sdk-node',
    description: "I wrote WealthEngine's first Node.js SDK",
    body: WENodeSDK,
    image: '/img/wakka.png'
  },
  {
    title: 'The first PHP SDK for the WealthEngine API',
    slug: 'wealthengine-sdk-php',
    description: "I wrote WealthEngine's first PHP SDK",
    body: WEPHPSDK,
    image: '/img/wokka.png'
  },
  {
    title: 'The first Python SDK for the WealthEngine API',
    slug: 'wealthengine-python-sdk',
    description: "I wrote WealthEngine's first Python SDK",
    body: WEPythonSDK,
    image: '/img/wikka.png'
  },
  {
    title: 'Padscoper Real estate search app',
    slug: 'padscoper',
    description:
      'A Node.js app that allows you to search for properties within 20 miles of a given address',
    body: Padscoper,
    image: '/img/padscoper-blog.png'
  },
  {
    title: 'Wisdomseeker Wikipedia crawler',
    slug: 'wisdomseeker',
    description:
      'All Wikipedia articles eventually link back to Philosophy if you follow the first link',
    body: Wisdomseeker,
    image: '/img/wisdomseeker-blog.png'
  },
  {
    title: 'Hashtag Blaster WordPress plugin',
    slug: 'hashtag-blaster',
    description:
      'The Twitter hashtag blaster allows you to add Tweet buttons to your posts preloaded with a given hashtag for your readers',
    body: Hashtagblaster,
    image: '/img/hashtag-blaster-blog.png'
  },
  {
    title: 'Pageripper Go and React web app',
    slug: 'pageripper',
    description:
      'A very fast web scraping app that extracts links from a webpage and lets you download them in csv form',
    body: Pageripper,
    image: '/img/pageripper-blog.png'
  },
  {
    title: 'Cf-terraforming is an official Cloudflare CLI',
    slug: 'cf-terraforming',
    description:
      'Cf-terraforming allows you to download your Cloudflare resources into Terraform config files',
    body: CFTerraforming,
    image: '/img/blue.png'
  },
  {
    title: 'This very website',
    slug: 'vue-portfolio-site',
    description:
      'I built my portfolio site to my exact specifications using Vue.js and VueBootstrap',
    body: VuePortfolioSite,
    image: '/img/portfolio-screens/zackproser-com-blog.png'
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
