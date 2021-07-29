export default {
  name: 'Accordion',

  props: { title: { type: String, default: ' ' }, open: { type: Boolean, default: false }, list: { type: Boolean, default: false } },
  data () {
    return { openState: this.open }
  },
  methods: {
    toggleOpen: function () {
      this.openState = !this.openState
      return true
    }
  }
}
