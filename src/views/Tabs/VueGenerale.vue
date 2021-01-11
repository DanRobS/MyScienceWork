<template>
  <div class="General">

    <ul id="affiliations">
      <li v-for="item in $store.state.user.affiliations" :key="item" class="affiliation-item">
        <p class="affiliation-name"> {{ item.organisation }} </p>
        <!--<p class="affiliation-role"> {{ item.role }} </p>-->
        <p class="affiliation-team"> {{ item.equipe }} </p>
        <p v-if="item.dateDebut != '' && item.dateFin == null" class="affiliation-date"> Depuis {{item.dateDebut}} </p>
        <p v-else class="affiliation-date"> {{item.dateDebut}} - {{item.dateFin}} </p>
        <p class="affiliation-country"> {{item.pays}} </p>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'VueGenerale',
  components: {

  }
}
</script>

<style lang="scss">

  .General {
    //border-style: solid;
    //border-color: black;
    padding-left: 2.5%;
    margin-top: 5%;
  }

  .affiliation-item {
    margin-bottom: 2%;
  }

  .affiliation-name {
    font-size: 200%;
    font-weight: bold;
    color: #344b98;
  }

  .affiliation-role {
    font-size: 140%;
    font-style: italic;
    margin-bottom: 0.5%;
  }

  .affiliation-team {
    font-size: 110%;
  }

  .affiliation-date {
    font-size: 110%;
  }

  .affiliation-country {
    font-style: italic;
    font-size: 115%;
  }

@media (max-width: 768px) {
  .affiliation-name {
    font-size: 150%;
    font-weight: bold;
  }

  .affiliation-role {
    font-size: 100%;
    font-style: italic;
    margin-bottom: 0.5%;
  }

  .affiliation-team {
    font-size: 80%;
  }

  .affiliation-date {
    font-size: 80%;
  }

  .affiliation-country {
    font-style: italic;
    font-size: 80%;
  }
}
</style>
