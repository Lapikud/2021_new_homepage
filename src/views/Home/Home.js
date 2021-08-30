import Button from '@/components/Button/Button.vue'
import TextMedia from '@/components/TextMedia/TextMedia.vue'
import ImageSlider from '@/components/ImageSlider/ImageSlider.vue'
import IconSection from '@/components/IconSection/IconSection.vue'
import Partners from '@/components/Partners/Partners.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    'v-button': Button,
    'v-textmedia': TextMedia,
    'v-image-slider': ImageSlider,
    'v-icon-section': IconSection,
    'v-partners': Partners
  },
  methods: {
    importAll: function (r) {
      return r.keys().map(r)
    }
  }
}
