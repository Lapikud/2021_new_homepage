import { ourwork } from '@/assets/data/ourwork.yml'
import MasonryWall from '@yeger/vue-masonry-wall'

/* import VueMasonryGallery from 'vue-masonry-gallery' */

export default {
  name: 'Projects',
  data: () => ({
    overlay: false,
    projects: ourwork
  }),
  components: {
    'v-masonry': MasonryWall
  }
}
