<template>
  <div class="TabsUtilisateur column is-9">
    <div id="top-tabs" class="tabs is-toggle 
              is-centered is-large is-info">
      <ul @click="activateTab">
        <li class="tab is-active">
            <router-link to="/vuegenerale">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'home']"/>
            </span>
              Vue generale
            </router-link>
        </li>
        <li class="tab">
            <router-link to="/profil">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'user']"/>
            </span>
              Mon profil
            </router-link>
        </li>
        <li class="tab">
            <router-link to="/publications">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'file-alt']"/>
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

  },
  methods: {
    //code snippet from 'the net ninja'
    //enables 'is-active' tag on selected tab
    activateTab: function () {
      var tabs = document.getElementsByClassName('tab');
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          tabs.forEach(item => item.classList.remove('is-active'))
          tab.classList.add('is-active')
        })
      })
    }

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
