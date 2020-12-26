<template>
  <div id="app">

    <UserSearchBar />

    <div id="user-infos">
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
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
}

</style>
