import Accordion from '@/components/Accordion/Accordion.vue'

export default {
  name: 'About Us',
  components: { 'v-accordion': Accordion },

  data: () => ({
    contents: [
      {
        question: 'Who is the best Superhero?',
        answer: "I'm not sure but we love him 3000",
        open: false
      },
      {
        question: "What is Goku's form called with White Hair?",
        answer: 'Mastered Ultra Instinct',
        open: false
      },
      {
        question: 'Have you liked & subscried yet?',
        answer: 'YES',
        open: false
      }
    ]
  })
}
