import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Link',
  props: {
    text: String,
    url: String,
    newTab: Boolean,
    icon: String,
    iconSize: String,
    sizeValidator: (iconSize) => ['12', '16', '24'].includes(iconSize)
  },
  components: {
    'v-icon': Icon
  }
}
