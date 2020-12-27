<template>
  <div id="app" class="container is-fluid">

    <UserSearchBar />

    <div id="user-infos" class="columns">
      <Avatar />
      <TabsUtilisateur />
    </div>


  </div>
</template>

<script>
import UserSearchBar from './components/UserSearchBar'
import Avatar from './components/Avatar'
import TabsUtilisateur from './views/TabsUtilisateur'

export default {
  name: 'App',
  components: {
    UserSearchBar,
    Avatar,
    TabsUtilisateur
  }
}
</script>


<style lang="scss">

#user-infos {
  margin-top: 1%;
  padding: 1%;
}

</style>
