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
        <b-button class="is-primary is-focused">Rechercher</b-button>
      </b-field>
    </div>

    <ul id="publication-list">
      <li class="publication">
        <p class="publication-infos">
          <span class="pub-authors">Hugh Généreux, Frank Martin</span>.
          <span class="pub-date">2016</span>. 
          <span class="pub-title">Radioactive
          materials and their effects to health</span>.
        </p>
      </li>

      <li class="publication">
        <p class="publication-infos">
          <span class="pub-authors">Hugh Généreux, Frank Martin, Selena Smith et al</span>.
          <span class="pub-date">2015</span>. 
          <span class="pub-title">La fission nucléaire expliquée par l'exemple</span>.
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
