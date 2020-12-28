<template>
  <div class="UserSearchForm column container has-text-centered">

    
      <b-field>
        <b-autocomplete
          rounded
          v-model="name"
          :data="filteredDataArray"
          placeholder="Rechercher un utilisateur"
          icon="magnify"
          clearable
          @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>

      <b-button id="searchButton" type="submit">
        Rechercher
      </b-button>
      
    
    
  </div>
</template>

<script>
export default {
  name: 'UserSearchForm',
  components: {

  }
}
</script>


<style lang="scss">

.UserSearchBar {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
