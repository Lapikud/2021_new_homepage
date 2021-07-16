import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Slider',
  props: {
    height: String
  },
  components: {
    'v-icon': Icon
  },
  data () {
    return {
      timer: null,
      currentIndex: 0,
      imageArray: []
    }
  },
  mounted () {
    /* this.imageArray = this.images.map(({ filename }) => '@/assets/images/slideshow/' + filename) */
    this.imageArray = this.importAll(require.context('@/assets/images/slideshow/', true, /\.jpg|gif|png|svg$/))
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 3000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    },

    importAll: function (r) {
      return r.keys().map(r)
    }
  },
  computed: {
    currentImg: function () {
      return this.imageArray[Math.abs(this.currentIndex) % this.imageArray.length]
    }
  }
}
