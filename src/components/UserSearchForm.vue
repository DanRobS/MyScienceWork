<template>
  <div class="UserSearchForm column container has-text-centered">

      <b-field>
        <b-autocomplete
          v-model="name"
          :data="filteredDataArray"
          placeholder="Rechercher un utilisateur"
          icon="calendar-day"
          icon-pack="fas"
          clearable
          @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>

      <a id="searchButton" type="submit"  
        class="button is-primary is-light is-focused">
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

.UserSearchForm {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
