<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="`/posts/${post.slug}`">
          {{ post.attributes.category }} : {{ post.attributes.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const resolve = require.context('~/posts/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        console.dir(resolve(key))
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.category == 'blog')
    console.dir(imports)
    return {
      posts: imports
    }
  }
}
</script>
