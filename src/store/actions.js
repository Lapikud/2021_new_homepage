import axios from 'axios'

const loadStartPage = async ({ commit, getters }) => {
  const { data: startpageinfo } = await axios.get(`${getters.apiUrl}/setting/1`, getters.apiHeader)
  await commit('updateStartPage', startpageinfo)
}

export default {
  loadStartPage
}
