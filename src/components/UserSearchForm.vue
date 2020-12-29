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

      <a id="searchButton" type="submit"  
        class="button is-info is-outlined">
          Rechercher
      </a>
      
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
