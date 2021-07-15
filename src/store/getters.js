const apiUrl = state => state.apiUrl

const token = state => state.token

const apiHeader = state => ({ headers: { Authorization: `Bearer ${state.token}` } })

const startpageinfo = state => state.startpageinfo

export default {
  apiUrl,
  apiHeader,
  startpageinfo,
  token
}
