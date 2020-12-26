<template>
  <div class="UserSearchBar">

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
    <a class="button" id="searchButton">
      Lancer la rechercher
    </a>
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
  margin-top: 5%;
  margin-right: 20%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
}

#searchButton {
  margin-left: 40%;
  margin-right: 40%;
}

</style>
