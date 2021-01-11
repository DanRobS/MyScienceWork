<template>
  <div class="UserSearchForm column container has-text-centered">

      <b-field>
        <b-autocomplete
          v-model="username"
          :data="userData"
          placeholder="Rechercher un utilisateur"
          icon="calendar-day"
          icon-pack="fas"
          :highlight="true"
          field="fullName"
          @input="searchUser"
          clearable
          @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>

      <button id="searchButton" type="submit"  
        @click="launchSearch"
        class="button is-primary is-light is-focused">
          Rechercher
      </button>
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserSearchForm',
  components: {

  },
  data: () => {
    return {
      username: '',
      userData: []
    }
  },
  methods: {
    searchUser: function () {
      if(this.username!=''){
        axios.get(this.$store.state.URI_getUser+''+this.username)
        .then(response => {
            
            if(response.data.suggest_nom[0].options.length > 0){
              var i=0;
              for(i=0; i<response.data.suggest_nom[0].options.length; i++){
                if(!this.userData.some(e => e.id === response.data.suggest_nom[0].options[i]._id)){
                    this.userData.push({
                    id: response.data.suggest_nom[0].options[i]._id,
                    fullName: response.data.suggest_nom[0].options[i]._source.prenom+' '+response.data.suggest_nom[0].options[i]._source.nom
                  });
                }
              }
            }

            if(response.data.suggest_prenom[0].options.length > 0){
              var j=0;
              for(j=0; j<response.data.suggest_prenom[0].options.length; j++){
                if(!this.userData.some(e => e.id === response.data.suggest_prenom[0].options[j]._id )){
                    this.userData.push({
                    id: response.data.suggest_prenom[0].options[j]._id,
                    fullName: response.data.suggest_prenom[0].options[j]._source.prenom+' '+response.data.suggest_prenom[0].options[j]._source.nom
                  });
                }
              }
            }
        })
        .catch(error =>{
            console.log(error);
        })
      }
    },

    launchSearch: function () {
      
    }
  }
}
</script>


<style lang="scss">

.UserSearchForm {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
