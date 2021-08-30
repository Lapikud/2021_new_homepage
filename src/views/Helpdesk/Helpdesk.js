import Map from '@/components/Map/Map.vue'
import { services, serviceDescription } from '@/assets/data/services.yml'
import Slider from '@/components/ImageSlider/ImageSlider.vue'

export default {
  name: 'Helpdesk',
  components: {
    'v-map': Map,
    'v-slider': Slider
  },
  data () {
    return {
      services: services,
      serviceDescriptions: serviceDescription
    }
  },
  methods: {
    importAll: function (r) {
      return r.keys().map(r)
    }
  }
}
