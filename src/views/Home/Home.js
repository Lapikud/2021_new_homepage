import Button from '@/components/Button/Button.vue'
import TextMedia from '@/components/TextMedia/TextMedia.vue'
import ImageSlider from '@/components/ImageSlider/ImageSlider.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    'v-button': Button,
    'v-textmedia': TextMedia,
    'v-image-slider': ImageSlider
  }
}
