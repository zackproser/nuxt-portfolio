<template>
  <div>
    <nav-links />
    <exhibit prefix="blog" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import NavLinks from '~/components/Nav.vue'
import Exhibit from '~/components/Exhibit.vue'

import ModernDeployment from 'html-loader!~/assets/articles/blog/modern-deployment.html'
import DockerizedExpress from 'html-loader!~/assets/articles/blog/dockerized-express-js.html'
import DockerTips from 'html-loader!~/assets/articles/blog/docker-tips-and-tricks.html'
import ArticleOptimizer from 'html-loader!~/assets/articles/blog/open-sourced-article-optimizer.html'
import CanyonRunner from 'html-loader!~/assets/articles/blog/open-source-canyonrunner.html'
import Goodneighbor from 'html-loader!~/assets/articles/blog/goodneighbor.html'
import Catfacts from 'html-loader!~/assets/articles/blog/catfacts.html'
import Speakeasy from 'html-loader!~/assets/articles/blog/speakeasy.html'

const writings = [
  {
    title: 'Create a Dockerized Express service that prevents bad builds',
    date: '01 May 2017',
    slug: 'dockerized-express-service',
    description:
      "How to create test-driven web services that won't build when broken",
    body: DockerizedExpress,
    image: '/img/wakka.png'
  },
  {
    title: 'Stretching your infrastructure with Forge and Cloudflare',
    slug:
      'A-Modern-Deployment-Pipeline-With-DigitalOcean-and-Laravel-Forge-and-Cloudflare',
    date: '04 April 2017',
    description:
      'How I once ran 7 node.js and PHP apps, serving over 300,000 requests per month, for $35 with Laravel Forge, DigitalOcean and Cloudflare',
    body: ModernDeployment,
    image: '/img/wokka.png'
  },
  {
    title: 'Docker command-line tips and tricks',
    date: 'Who knows',
    slug: 'docker-command-line-tips-and-tricks',
    description: 'Handy tips for working with Docker',
    body: DockerTips,
    image: '/img/wikka.png'
  },
  {
    title: 'I built a Twitter AI framework that runs accounts of any identity',
    date: 'Who cares',
    slug: 'goodneighbor-twitter-ai-platform',
    description:
      'Goodneighbor runs Twitter accounts on any subject 100% autonomously, better than a human can',
    body: Goodneighbor,
    image: '/img/goodneighbor-screens/goodneighbor-blog.png'
  },
  {
    title: 'I open sourced my content analysis tool',
    date: '01 May 2017',
    slug: 'i-open-sourced-my-content-analysis-tool',
    description:
      'Article Optimizer is a full stack PHP app that leverages natural language processing to help you optimize your web content',
    body: ArticleOptimizer,
    image: '/img/optimizer-blog.png'
  },
  {
    title: 'I open sourced my Phaser HTML5 game',
    date: '01 May 2017',
    slug: 'i-open-sourced-my-phaser-html-5-game',
    description:
      'Learn how to build a complete game including common subsystems',
    body: CanyonRunner,
    image: '/img/canyonrunner-blog.png'
  },
  {
    title: 'I built the cat facts prank into an express.js service with Twilio',
    date: 'HSSSSSSSSSSH motherfucker',
    slug: 'catfacts-attack-service',
    description: 'Prank your friends with the cat facts service from hell',
    body: Catfacts,
    image: '/img/catfacts-screens/catfacts-blog.png'
  },
  {
    title: 'Speakeasy: Golang Twilio client',
    date: 'Time is not real',
    slug: 'speakeasy-golang-twilio',
    description:
      'Speakeasy is a Golang client for sending SMS and making calls via Twilio',
    body: Speakeasy,
    image: '/img/speakeasy-screens/speakeasy-blog.png'
  }
]

export default {
  name: 'Blog',
  props: ['slug'],
  components: {
    NavLinks,
    Exhibit
  },
  data() {
    return {
      posts: writings
    }
  }
}
</script>

<style></style>
