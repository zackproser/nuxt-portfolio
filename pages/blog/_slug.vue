<template>
  <div>
    <nav-links />
    <b-container>
      <b-row>
        <b-col>
          <div
            :class="[
              'post-view',
              selected ? 'post-view--active' : '',
              ready ? 'post-view--ready' : ''
            ]"
          >
            <div
              v-if="selected"
              class="post-view__container"
              xs="12"
              sm="12"
              md="10"
              lg="10"
              xl="10"
            >
              <h2 class="post-title">
                {{ post.attributes.title }}
              </h2>

              <h4 class="post-date">
                {{ post.attributes.date }}
              </h4>
              <div
                xs="12"
                sm="12"
                md="10"
                lg="10"
                xl="10"
                class="post-view__content"
                v-html="post.html"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavLinks from '~/components/Nav.vue'

export default {
  name: 'BlogView',
  components: {
    NavLinks
  },
  data() {
    return {
      ready: true,
      selected: true
    }
  },
  async asyncData({ params }) {
    try {
      let post = await import(`~/blog/${params.slug}.md`)
      console.dir(post)
      return {
        post
      }
    } catch (err) {
      return false
    }
  }
}
</script>
