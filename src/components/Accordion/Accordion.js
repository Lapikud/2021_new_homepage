export default {
  name: 'Accordion',

  props: { contentArray: Array },
  data () {
    return { contents: this.contentArray }
  },
  methods: {
    toggleOpen: function (index) {
      this.contents = this.contents.map((content, i) => {
        if (index === i) {
          content.open = !content.open
        }
        return content
      })
    }
  }
}
