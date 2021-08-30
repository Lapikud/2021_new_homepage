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
      return Object.values(['<b>Tiimid: </b>'].concat(teams.join(', '))).join(' ')
    },
    getContact: (contacts) => {
      const output = []
      Object.values(contacts).forEach((element) => {
        const value = element.name === 'Facebook' || element.name === 'Messenger' ? `<a class="c-link" href="${element.value}" target="__blank" rel="noopener noreferrer" alt="Facebook">${element.name}</a>` : element.value
        const out = element.name === 'Facebook' || element.name === 'Messenger' ? value : `${element.name} : ${value}`
        output.push(out)
      })
      return output.join('</br>')
    }
  }
}
