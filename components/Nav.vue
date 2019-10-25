<template>
  <b-container>
    <b-nav class="my-5">
      <b-nav-item>
        <nuxt-link to="/" exact>
          About
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/artwork">
          Artwork
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/shop">
          Art Store
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/github">
          GitHub
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/resume">
          Resume
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/software">
          Software
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/codepen">
          Codepen.io
        </nuxt-link>
      </b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
export default {
  name: 'NavLinks'
}
</script>

<style scoped>
.nav a {
  font-size: 20px;
  font-weight: 800;
  color: black;
}
.nav a.active {
  text-decoration: underline;
}
</style>
