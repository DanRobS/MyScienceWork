<template>
  <div class="General">

    <ul id="affiliations">
      <li class="affiliation-item">
        <p class="affiliation-name">Commissariat à l'énergie atomique</p>
        <p class="affiliation-role">Chercheur post-doctoral</p>
        <p class="affiliation-team">Equipe de recherche en fission nucléaire</p>
        <p class="affiliation-date">Depuis 2017</p>
        <p class="affiliation-country">France</p>
      </li>

      <li class="affiliation-item">
        <p class="affiliation-name">Idaho National Laboratory</p>
        <p class="affiliation-role">Doctorant</p>
        <p class="affiliation-team">Research team on radioactive materials</p>
        <p class="affiliation-date">2011 - 2016</p>
        <p class="affiliation-country">Etats-Unis</p>
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
  }

  .affiliation-role {
    font-size: 140%;
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

</style>
