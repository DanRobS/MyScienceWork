<template>
  <div class="TabsUtilisateur column is-9">
    <div class="tabs is-toggle is-centered is-boxed is-large">
      <ul>
        <li>
            <router-link to="/vuegenerale">
              Vue generale
            </router-link>
        </li>
        <li>
            <router-link to="/profil">
              Mon profil
            </router-link>
        </li>
        <li >
            <router-link to="/publications">
              Mes publications
            </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {


  name: 'TabsUtilisateur',
  components: {

  }
}
</script>

<style lang="scss">

.TabsUtilisateur {
  border-style: solid;
  border-color: black;
}

</style>
