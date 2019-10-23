<template>
  <b-container class="my-5">
    <b-row>
      <h3 class="my-4">
        {{ title }}
      </h3>
    </b-row>

    <b-card-group>
      <b-card
        v-for="image in images"
        :key="image.src"
        overlay
        :title="image.title"
        :img-src="image.src"
        img-top
      >
        <b-card-text>
          {{ image.description }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: 'CompanyRow',
  props: {
    images: Array,
    title: String,
    tiled: Boolean
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: #00bf8f;
}
</style>
