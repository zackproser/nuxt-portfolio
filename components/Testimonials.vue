<template>
  <b-carousel
    id="carousel1"
    v-model="slide"
    style="color: #000;"
    :interval="6000"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <testimonial-item
      v-for="testimonial in testimonials"
      :key="testimonial.title"
      :name="testimonial.name"
      :title="testimonial.title"
      :quote="testimonial.quote"
      :image="testimonial.image"
    />
  </b-carousel>
</template>

<script>
import testimonials from '../data/testimonials.json'
import TestimonialItem from '~/components/TestimonialItem'

export default {
  name: 'TestimonialsCarousel',
  components: {
    TestimonialItem
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      testimonials
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>
<style></style>
