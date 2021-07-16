import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Icon Section',
  data () {
    return {
      spritePath: require('@/assets/images/sprite.svg')
    }
  },
  components: {
    'v-button': Button,
    'v-icon': Icon
  }

}
