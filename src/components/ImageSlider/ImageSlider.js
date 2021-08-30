import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Slider',
  props: {
    height: String,
    images: Array
  },
  components: {
    'v-icon': Icon
  },
  data () {
    return {
      timer: null,
      currentIndex: 0,
      imageArray: this.images
    }
  },
  mounted () {
    /* this.imageArray = this.images.map(({ filename }) => '@/assets/images/slideshow/' + filename) */
    this.imageArray = this.images
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000)
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
