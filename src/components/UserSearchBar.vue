<template>
  <div class="UserSearchBar">

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

</style>
