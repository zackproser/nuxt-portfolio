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
        :image="testimonial.image"
      />
    </b-container>
  </div>
</template>

<script>
import testimonials from '../../data/testimonials.json'

import NavLinks from '~/components/Nav.vue'
import TestimonialFlat from '~/components/TestimonialFlat'

export default {
  name: 'TestimonialsGallery',
  components: {
    NavLinks,
    TestimonialFlat
  },
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
