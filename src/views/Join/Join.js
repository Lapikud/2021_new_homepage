import InfoCard from '@/components/InfoCard/InfoCard.vue'
import Button from '@/components/Button/Button.vue'
import { mentors } from '@/assets/data/mentors.yml'

export default {
  name: 'Join',
  components: { 'v-infocard': InfoCard, 'v-button': Button },
  data: () => ({
    mentors: mentors
  }),
  methods: {
    stringify: (text) => {
      if (typeof text !== 'string') {
        return Object.values(text).join('<br/> ')
      }
      return text
    },
    getTeams: (teams) => {
      return Object.values(['Tiimid:'].concat(teams.join(', '))).join(' ')
    },
    getContact: (contacts) => {
      const output = []
      Object.values(contacts).forEach((element) => {
        const out = `${element.name} : ${element.value}`
        output.push(out)
      })
      return output.join('</br>')
    }
  }
}
