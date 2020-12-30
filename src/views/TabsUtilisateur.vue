<template>
  <div class="TabsUtilisateur column is-9">
    <div id="top-tabs" class="tabs is-toggle 
              is-centered is-boxed is-large is-info"
              type="is-toggle">
      <ul>
        <li>
            <router-link to="/vuegenerale">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'home']" size=""
                :style="{ color: '#344b98' }"/>
            </span>
              Vue generale
            </router-link>
        </li>
        <li>
            <router-link to="/profil">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'user']" size=""
                :style="{ color: '#344b98' }"/>
            </span>
              Mon profil
            </router-link>
        </li>
        <li>
            <router-link to="/publications">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'file-alt']" size=""
                :style="{ color: '#344b98' }"/>
            </span>
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
  background-color: #a4b2e0;
}

@media (max-width: 768px) {
  #top-tabs {
        
  }
}

</style>
