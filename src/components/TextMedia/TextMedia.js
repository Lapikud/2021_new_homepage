import Slider from '@/components/ImageSlider/ImageSlider.vue'

export default {
  name: 'TextMedia',
  props: {
    heading: String,
    content: String,
    images: Array,
    imgPosition: String,
    validator: (imgPosition) => ['left', 'right'].includes(imgPosition)
  },
  components: {
    'v-slider': Slider
  }
}
