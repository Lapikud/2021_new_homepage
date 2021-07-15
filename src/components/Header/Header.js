import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Header',
  data () {
    return {
      dropdownOpen: false,
      mobile: window.innerWidth <= 750,
      spritePath: require('@/assets/images/sprite.svg'),
      locale: this.$route.params.lang
    }
  },
  created () {
    addEventListener('resize', () => {
      this.mobile = innerWidth <= 750
    })
  },
  props: {
    homepage: Boolean
  },
  components: {
    'v-button': Button,
    'v-icon': Icon
  }
}
