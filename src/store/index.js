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
        {
          organisation: 'Store 1',
          equipe: 'Equipe Store 1',
          dateDebut: '01/06/2020',
          dateFin: '02/07/2021',
          pays: 'Namek',
        }
      ],
      user_publications: {

      }
    }
  },
  
  mutations: {
    updateUserInfos (state, payload) {
      if(payload.nom!='')
      state.user.infos.nom = payload.nom;

      if(payload.prenom!='')
      state.user.infos.prenom = payload.prenom;
      
      if(payload.about!='')
      state.user.infos.about = payload.about;
    },
    
    addAffiliation (state, payload) {
      state.user.affiliations.push(payload);
    }
  },
  
  actions: {
  
  },
  
  modules: {
  
  }
})
