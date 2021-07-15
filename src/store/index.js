import { createStore } from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    locale: localStorage.locale || 'en',
    apiUrl: 'https://kitchen-guide.admdev.eu/backend/api',
    token: '25|FOAFAhCWPnpUJKYUOFiM9c0NGPXboyt4evsNVFEh',
    startpageinfo: []
  },
  getters,
  mutations,
  actions
})

export default store
