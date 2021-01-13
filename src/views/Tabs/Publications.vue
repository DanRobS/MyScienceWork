<template>
  <div class="Publications">

    <div class="publication-search-field">
      <b-field>
        <b-autocomplete
          rounded
          v-model="title"
          :data="filteredDataArray"
          placeholder="Entrer le nom d'un article"
          :highlight="true"
          @input="searchPublications"
          clearable
          field="publication"
          @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>

        <b-button @click="launchSearch" class="is-primary is-focused">Rechercher</b-button>
      </b-field>
    </div>

    <ul id="publication-list">
      <li v-for="item in $store.state.user.publications" :key="item" class="publication">
        <p class="publication-infos">
          <span v-for="auteur in item.auteurs" :key="auteur" class="pub-authors"> {{ auteur.nom }} - </span>
          <span class="pub-date"> {{ item.annee }}. </span> 
          <span class="pub-title"> {{ item.titre }}. </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Publications',
  components: {

  },
  data: () => {
    return {
      title: '',
      selected: null,
      publicationData: []
    }
  },
  methods: {
    searchPublications: function (){
      if (this.title != ''){

        axios.get(this.$store.state.URI_getPublication+''+this.$store.state.user.prenom+' '+this.$store.state.user.nom+'/'+this.title)
          .then(response => {
            this.publicationData = [];

            if(response.data.length > 0){
              response.data.forEach(element => {
                console.log(element._source.titre)
                if(!this.publicationData.some(e => e.id === element._id)){
                  this.publicationData.push({
                    id: element._id,
                    publication: element._source.titre
                  })
                }
              })
            }
          })
          .catch(error => {
            console.log(error);
          })
      } else {
        this.publicationData = [];
      }
    },

    launchSearch: function () {
      this.$store.dispatch('findPublications_action',this.selected);
      this.title='';  
    }
  },
  

  computed: {
    filteredDataArray() {
      return this.publicationData.filter((option) => {
        return option
        })
      }
  }
}
</script>

<style lang="scss">

.Publications {
  padding-left: 2.5%;
  margin-top: 5%;
}

.publication {
  margin-bottom: 1.5%;
}

.publication-infos {
  font-size: 150%;
}

.publication-search-field {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}

.pub-authors {
  font-style: italic;
  color: #344b98;
}

.pub-date {
  font-style: italic;
  color: #344b98;
}

.pub-title {
  font-weight: bold;
  color: #344b98;
}

@media (max-width: 768px) {

  .publication {
    margin-bottom: 5%;
  }

  .pub-authors {
    font-size: 80%;
  }

  .pub-date {
    font-size: 80%;
  }

  .pub-title {
    font-size: 80%;
  }
}
</style>
