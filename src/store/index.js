import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    URI_getUser: 'http://localhost:8081/getUser/',
    URI_getUserById: 'http://localhost:8081/getUserById/',
    URI_updateUserInfos: 'http://localhost:8081/updateUserInfos/',
    URI_updateSocialMedia: 'http://localhost:8081/updateSocialMedia',
    URI_removeSocialMedia: 'http://localhost:8081/removeSocialMedia',
    URI_updateAffiliation: 'http://localhost:8081/updateAffiliation',
    user: {
      infos: {
        id: 0,
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
          dateDebut: '2020-01-06',
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
    },

    removeSocialMedia (state, payload) {
      if(payload.social_media=='Facebook')
      state.user.social_media.facebook = '';  
    
      if(payload.social_media=='LinkedIn')
      state.user.social_media.linkedin = '';
    
      if(payload.social_media=='Twitter')
      state.user.social_media.twitter = '';

      if(payload.social_media=='Orcid')
      state.user.social_media.orcid = '';
    },

    deleteAffiliation (state, payload) {
      state.user.affiliations.splice(payload, 1);
    },

    updateAffiliation (state, payload) {

      if(state.user.affiliations.some(e => e === payload.aff_to_update)){
        state.user.affiliations[payload.index].organisation = payload.organisation;
        state.user.affiliations[payload.index].equipe = payload.equipe;
        state.user.affiliations[payload.index].dateDebut = payload.dateDebut;
        state.user.affiliations[payload.index].dateFin = payload.dateFin;
        state.user.affiliations[payload.index].pays = payload.pays;
      }
    },

    findUserById(state, payload) {
      state.user.infos = {
        id: payload.id,
        nom: payload.nom,
        prenom: payload.prenom,
        about: payload.about
      };
      state.user.social_media = {
        facebook: payload.facebook,
        linkedin: payload.linkedin,
        twitter: payload.twitter,
        orcid: payload.orcid
      }
      state.user.affiliations = payload.affiliations;
    }
  },
  
  actions: {
    addSocialMedia_action (context, payload) {
      axios.post(this.state.URI_updateSocialMedia, payload)
      .then(response => {
        console.log(response.data.message);
        context.commit('addSocialMedia', payload);
      })
      .catch(err => {
        console.log(err);
      })

      
    },

    removeSocialMedia_action (context, payload) {

      axios.post(this.state.URI_removeSocialMedia, payload)
        .then(response => {
          console.log(response.data.message);
          context.commit('removeSocialMedia', payload);
        })
        .catch(err => {
          console.log(err);
        })

    },

    updateUserInfos_action (context, payload) {
      axios.post(this.state.URI_updateUserInfos, payload)
      .then(response => {
        console.log(response.data.message);
        context.commit('updateUserInfos', payload);
      }).catch(err => {
        console.log(err);
      })
    },

    deleteAffiliation_action (context, payload) {
      context.commit('deleteAffiliation', payload);
    },

    addAffiliation_action (context, payload) {
      context.commit('addAffiliation', payload);
    },

    updateAffiliation_action (context, payload) {

      axios.post(this.state.URI_updateAffiliation, payload)
        .then(response => {
          console.log(response.data.message);
          context.commit('updateAffiliation', payload);
        })
        .catch(err => {
          console.error(err);
        })
    },
    
    findUserById_action(context, payload) {
      var payload2 = {};
      axios.get(this.state.URI_getUserById+''+payload.id)
        .then(response => {
          
          payload2 = {
            id: payload.id,
            nom: response.data._source.nom,
            prenom: response.data._source.prenom,
            about: response.data._source.about,
            facebook: response.data._source.facebook,
            linkedin: response.data._source.linkedin,
            twitter: response.data._source.twitter,
            orcid: response.data._source.orcid,
            affiliations: []
          }
          
          response.data.inner_hits.affiliations.hits.hits.forEach(element => {
            payload2.affiliations.push(element._source);
          });
          context.commit('findUserById', payload2);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  
  modules: {
  
  }
})
