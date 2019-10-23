<template>
  <div>
    <nav-links />
    <b-container>
      <testimonial-flat
        v-for="testimonial in testimonials"
        :key="testimonial.title"
        :name="testimonial.name"
        :title="testimonial.title"
        :quote="testimonial.quote"
        :img-src="testimonial.imgSrc"
      />
    </b-container>
  </div>
</template>

<script>
import testimonials from '../data/testimonials.json'

export default {
  name: 'TestimonialsGallery',
  data() {
    return {
      testimonials
    }
  }
}
</script>
<style scoped>
.testimonial-item {
  margin: 30px 0 30px 0;
}
</style>
