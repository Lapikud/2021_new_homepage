import Stream from '@/components/Stream/Stream.vue'

export default {
  name: 'Stream',
  components: {
    'v-stream': Stream
  },
  data: () => ({
    streams: [
      {
        href: 'https://master.lapikud.ee/stream0/3',
        video: 'https://master.lapikud.ee/stream0/2',
        alt: 'stream'
      },
      {
        href: 'https://master.lapikud.ee/stream0/5',
        video: 'https://master.lapikud.ee/stream0/4',
        alt: 'stream'
      },
      {
        href: 'https://master.lapikud.ee/stream0/0',
        video: 'https://master.lapikud.ee/stream0/1',
        alt: 'stream'
      }
    ]
  })
}
