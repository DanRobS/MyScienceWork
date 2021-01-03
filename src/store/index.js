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
        facebook: 'Dan Rob Kunta',
        linkedin: 'Dan Tsoumbou Moutimba',
        twitter: 'DanRob95',
        orcid: 'None'
      },
      affiliations: [
        {
          organisation: 'Commissariat à l\'énergie atomique',
          equipe: 'Equipe de recherche en fission nucléaire',
          dateDebut: '01/06/2020',
          dateFin: '',
          pays: 'France',
        }
      ],
      publications: [
        {
          titre: 'Radioactive materials and their effects to health',
          auteurs: [
            'Hugh Généreux',
            'Frank Martin'
          ],
          annee: '2016',
          langue: 'ENG'
        },
        {
          titre: 'La fission nucléaire expliquée par l\'exemple',
          auteurs: [
            'Hugh Généreux',
            'Frank Martin',
            'Selena Smith'
          ],
          annee: '2016',
          langue: 'FR'
        }
      ]
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
    },

    addSocialMedia (state, payload) {
      if(payload.social_media=='Facebook')
      state.user.social_media.facebook = payload.identifier;  
    
      if(payload.social_media=='LinkedIn')
      state.user.social_media.linkedin = payload.identifier;
    
      if(payload.social_media=='Twitter')
      state.user.social_media.twitter = payload.identifier;

      if(payload.social_media=='Orcid')
      state.user.social_media.orcid = payload.identifier;
    }
  },
  
  actions: {
  
  },
  
  modules: {
  
  }
})
