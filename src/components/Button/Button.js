export default {
  name: 'Button',
  props: {
    text: String,
    variation: String,
    href: String,
    validator: (variation) => ['primary', 'secondary'].includes(variation)
  }
}
