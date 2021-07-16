export default {
  name: 'Partners',
  data () {
    return {
      imageArray: []
    }
  },
  mounted () {
    this.imageArray = this.importAll(require.context('@/assets/images/partners/', true, /\.jpg|gif|png|svg$/))
  },
  methods: {
    importAll: function (r) {
      return r.keys().map(r)
    }
  }
}
