import Button from '@/components/Button/Button.vue'
import Header from '@/components/Header/Header.vue'
import TextMedia from '@/components/TextMedia/TextMedia.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    'v-header': Header,
    'v-button': Button,
    'v-textmedia': TextMedia
  }
}
