import { management } from '@/assets/data/management.yml'

export default {
  name: 'Contact',
  data () {
    return {
      management: management
    }
  },
  mounted () {
    const fbScript = document.createElement('script')
    fbScript.setAttribute('src', 'https://connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v11.0&appId=523524641552031&autoLogAppEvents=1')
    document.head.appendChild(fbScript)
    const instaScript = document.createElement('script')
    instaScript.setAttribute('src', '//www.instagram.com/embed.js')
    document.head.appendChild(instaScript)
  }
}
