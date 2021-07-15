import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: 'Header',
  data: () => ({
    dropdownOpen: false,
    mobile: window.innerWidth <= 750,
    tabLinks: [
      {
        tab: 'Esileht',
        route: '/'
      },
      {
        tab: 'Liitu',
        route: '/liitu'
      },
      {
        tab: 'Helpdesk',
        route: '/helpdesk'
      },
      {
        tab: 'Blogi',
        route: '/blogi'
      },
      {
        tab: 'Lapikutest',
        route: '/lapikutest'
      },
      {
        tab: 'Projektid',
        route: '/projektid'
      },
      {
        tab: 'Kontakt',
        route: '/kontakt'
      }
    ]

  }),
  created () {
    addEventListener('resize', () => {
      this.mobile = innerWidth <= 750
    })
  },
  props: {
    homepage: Boolean
  },
  components: {
    'v-button': Button,
    'v-icon': Icon
  }
}
