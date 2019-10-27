<template>
  <div>
    <nav-links />
    <exhibit prefix="blog" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import NavLinks from '~/components/Nav.vue'
import Exhibit from '~/components/Exhibit.vue'

export default {
  name: 'Blog',
  components: {
    NavLinks,
    Exhibit
  },
  props: ['slug'],
  async asyncData() {
    const resolve = require.context('~/blog/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.category == 'blog')
    return {
      posts: imports
    }
  }
}
</script>

<style>
.post-view__content p img:nth-of-type(1) {
  margin-top: 30px;
}
</style>
