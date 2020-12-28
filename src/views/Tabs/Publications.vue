<template>
  <div class="Publications">

    <div class="publication-search-field">
      <b-field>
        <b-autocomplete
          rounded
          v-model="name"
          :data="filteredDataArray"
          placeholder="Rechercher une publication"
          clearable
          @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>
        <b-button>Rechercher</b-button>
      </b-field>
    </div>

    <ul>
      <li class="publication">
        <p class="publication-infos">
          <span>Hugh Généreux, Frank Martin</span>.
          <span>2016</span>. 
          <span>Radioactive
          materials and their effects to health</span>.
        </p>
      </li>

      <li class="publication">
        <p class="publication-infos">
          <span>Frank Martin, Selena Smith et al</span>.
          <span>2015</span>. 
          <span>La fission nucléaire expliquée par l'exemple</span>.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Publications',
  components: {

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
</style>
