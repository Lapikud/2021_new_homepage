import Accordion from '@/components/Accordion/Accordion.vue'
import Statutues from '@/components/Statutues/Statutues.vue'
import { junior, senior, graduates } from '@/assets/data/members.yml'
import { pastmanagement } from '@/assets/data/past_management.yml'

export default {
  name: 'About Us',
  components: { 'v-accordion': Accordion, 'v-statutues': Statutues },

  data: () => ({
    members: {
      junior: { content: junior, title: 'MTÜ Lapikud noorliikmed' },
      senior: { content: senior, title: 'MTÜ Lapikud vanemliikmed' },
      graduates: { content: graduates, title: 'Lapikute vilistlased' }
    },
    pastmanagement: pastmanagement
    // contents: [
    //   {
    //     title: 'Who is the best Superhero?',
    //     open: false
    //   },
    //   {
    //     question: "What is Goku's form called with White Hair?",
    //     open: false
    //   },
    //   {
    //     question: 'Have you liked & subscried yet?',
    //     open: true
    //   }
    // ]
  })
}
