<template>
  <b-container>
    <b-row>
      <b-col>
        <div
          :class="[
            'logo',
            selected ? 'logo--absolute' : '',
            ready ? 'logo--active' : ''
          ]"
          @click="closePost()"
        />
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
              {{ currentPost.attributes.title }}
            </h2>

            <h4 class="post-date">
              {{ currentPost.attributes.date }}
            </h4>
            <div
              xs="12"
              sm="12"
              md="10"
              lg="10"
              xl="10"
              class="post-view__content"
              v-html="parsedPostBody"
            />
          </div>
        </div>
        <div
          xs="12"
          sm="12"
          md="2"
          lg="2"
          :class="['post-list', selected ? 'post-list--hide' : '']"
        >
          <b-card-group v-for="i in Math.ceil(posts.length / 3)" :key="i">
            <b-card
              v-for="post in posts.slice((i - 1) * 3, i * 3)"
              :key="post.slug"
              :title="post.attributes.title"
              class="post my-3"
              :img-src="`/${post.attributes.image}`"
              img-top
              @click="changePost(post.slug)"
            >
              <p class="card-text">
                {{ post.attributes.description }}
              </p>
              <div
                v-if="typeof post.attributes.date != undefined"
                slot="footer"
              >
                <small>{{ post.attributes.date }}</small>
              </div>
            </b-card>
          </b-card-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Exhibit',
  props: {
    prefix: String,
    slug: String,
    posts: Array
  },
  data() {
    return {
      currentPost: null,
      selected: false,
      ready: false,
      lastSelectedPost: null
    }
  },
  computed: {
    parsedPostBody() {
      return this.currentPost.html
    }
  },
  watch: {
    $route(to) {
      // Watch for and handle the case where someone clicks back to exhibit index via nav
      if (!to.params.slug) {
        this.selected = false
      }
    }
  },
  mounted() {
    this.selected = false
    if (this.slug) {
      this.changePost(this.slug)
    } else {
      this.selected = false
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      e.keyCode === 39 ? this.nextPost() : false
      e.keyCode === 37 ? this.prevPost() : false
      e.keyCode === 27 ? this.closePost() : false
    })
  },
  methods: {
    getPost(slug) {
      return (
        this.posts.filter((post) => post.slug === slug).pop() ||
        this.posts.shift()
      )
    },
    changePost(slug) {
      // Update the URL path
      this.$router.push(`${this.prefix}/${slug}`)
    },
    closePost() {
      if (this.lastSelectedPost !== null) {
        this.selected = false
        this.ready = false
      }
    },
    nextPost() {
      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++
        this.ready = false
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost]
          this.postImage = this.currentPost.image
          this.ready = true
        }, 600)
      }
    },
    prevPost() {
      if (
        this.lastSelectedPost <= this.posts.length - 1 &&
        this.lastSelectedPost !== 0
      ) {
        this.lastSelectedPost--
        this.ready = false
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost]
          this.postImage = this.currentPost.image
          this.ready = true
        }, 600)
      }
    }
  }
}
</script>
