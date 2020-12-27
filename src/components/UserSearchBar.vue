<template>
  <div class="UserSearchBar column container">

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
    <b-button id="searchButton">
      Rechercher
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'UserSearchBar',
  components: {
    
  }
}
</script>


<style lang="scss">

.UserSearchBar {
  //border-style: solid;
  //border-color: red;
  margin-top: 2%;

}

#searchButton {

}

</style>
