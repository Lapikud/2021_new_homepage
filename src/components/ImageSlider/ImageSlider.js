import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Slider',
  props: {
    images: Array,
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
    this.imageArray = this.images.map(({ filename }) => 'https://kitchen-guide.admdev.eu/backend/uploads/' + filename)
    console.log(this.height)
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 9000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  },

  computed: {
    currentImg: function () {
      return this.imageArray[Math.abs(this.currentIndex) % this.imageArray.length]
    }
  }
}
