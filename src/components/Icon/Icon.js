export default {
  name: 'Icon',
  props: {
    type: String,
    placement: String,
    size: String,
    color: String,
    placementValidator: (placement) => ['before', 'after'].includes(placement),
    sizeValidator: (size) => ['12', '16', '24', '40', '96'].includes(size)
  },
  data () {
    return {
      spritePath: require('@/assets/images/sprite.svg')
    }
  }
}
