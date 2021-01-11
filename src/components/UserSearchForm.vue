<template>
  <div class="UserSearchForm column container has-text-centered">

      <b-field>
        <b-autocomplete
          v-model="username"
          :data="filteredDataArray"
          placeholder="Entrer un nom ou un prénom"
          icon="calendar-day"
          icon-pack="fas"
          :highlight="true"
          field="fullName"
          @input="searchUser"
          clearable
          @select="option => selectedUser_id = option">
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
      userData: [],
      selectedUser_id: null
    }
  },
  methods: {
    searchUser: function () {
      if(this.username!=''){
        axios.get(this.$store.state.URI_getUser+''+this.username)
        .then(response => {
            this.userData = [];

            //GETTING DATA FROM LAST NAME SUGGESTION
            if(response.data.suggest_nom[0].options.length > 0){
              response.data.suggest_nom[0].options.forEach(element => {
                if(!this.userData.some(e => e.id === element._id)){
                    this.userData.push({
                    id: element._id,
                    fullName: element._source.prenom+' '+element._source.nom
                  });
                }
              })
            }

            //GETTING DATA FROM FIRST NAME SUGGESTION
            if(response.data.suggest_prenom[0].options.length > 0){
              response.data.suggest_prenom[0].options.forEach(element => {
                if(!this.userData.some(e => e.id === element._id)){
                    this.userData.push({
                    id: element._id,
                    fullName: element._source.prenom+' '+element._source.nom
                  });
                }
              })
            }
        })
        .catch(error =>{
            console.log(error);
        })
      } else {
        this.userData = [];
      }
    },

    //FETCHES THE USER BASED ON HIS ID, UPDATES THE STORE
    launchSearch: function () {
      this.$store.dispatch('findUserById_action',this.selectedUser_id);
      this.username='';  
    }
  },

  computed: {
    //DATA FROM WHICH AUTOCOMPLETE FIELD MATCHES INPUT
    filteredDataArray() {
      return this.userData.filter((option) => {
        return option
        })
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
