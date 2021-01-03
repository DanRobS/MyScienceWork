import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    user: {
      infos: {
        nom: '',
        prenom: '',
        about: ''
      },
      social_media: {
        facebook: '',
        linkedin: '',
        twitter: '',
        orcid: ''
      },
      affiliations: [

      ]/*,
      user_publications: {

      }*/
    }
  },
  
  mutations: {
    updateUserInfos (state, payload) {
      state.user.infos.nom = payload.nom;
      state.user.infos.prenom = payload.prenom;
      state.user.infos.about = payload.about;
    }
  },
  
  actions: {
  
  },
  
  modules: {
  
  }
})
