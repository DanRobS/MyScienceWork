<template>
  <div class="Avatar column">

    <div id="Avatar-pic">
      <b-image
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="6by4"
            :rounded="rounded"
      ></b-image>
    </div>

    <p id="name">
      {{ $store.state.user.infos.prenom }}
      {{ $store.state.user.infos.nom }}
    </p>

    <p class="Titles">About</p>
      <p id="about-text" class="has-text-justified">
         {{ $store.state.user.infos.about }}
      </p>

    <p class="Titles">Social media</p>
    <div class="social-media is-mobile">
      <ul>
        <li v-if="$store.state.user.social_media.facebook !=''" class="social-media-link">
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"
          :style="{ color: '#3b5998' }"/>
          <span href="https://facebook.com/" class="social-media-anchor">
            {{ $store.state.user.social_media.facebook }}  
          </span>
        </li>
        
        <li v-if="$store.state.user.social_media.linkedin !=''" class="social-media-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"
          :style="{ color: '#0e76a8' }"/>
          <span href="https://linkedin.com/" class="social-media-anchor">
            {{ $store.state.user.social_media.linkedin }}
          </span>
        </li>
        
        <li v-if="$store.state.user.social_media.twitter !=''" class="social-media-link">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x"
            :style="{ color: '#00acee' }"/>
          <span href="https://twitter.com/" class="social-media-anchor">
            {{ $store.state.user.social_media.twitter }}
          </span>
        </li>
        
        <li v-if="$store.state.user.social_media.orcid !=''" class="social-media-link">
          <font-awesome-icon :icon="['fab', 'orcid']" size="2x"
            :style="{ color: '#a6ce39' }"/>
          <span href="https://orcid.org/" class="social-media-anchor">
            {{ $store.state.user.social_media.orcid }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {

  }
}
</script>


<style lang="scss">
.Avatar {
  //border-style: solid;
  //border-color: black;
  padding-left: 1%;
  padding-right: 1%;
}

.Titles {
  font-size: 150%;
  font-style: oblique;
  font-weight: bold;
  margin-bottom: 1%;
}

.social-media {
  padding-right: 50%;
}

.social-media-link {
  margin-bottom: 3%;
}

#Avatar-pic {
  border-style: solid;
  border-color: black;
}

#name {
  font-size: 180%;
  font-style: normal;
  font-weight: bold;
}

#about-text {
  margin-bottom: 3%;
}

.social-media-anchor {
  font-size: 130%;
  color: #4965c1;
}

@media (max-width: 768px) {
  .Avatar {
    border-style: solid;
    border-color: black;
    border-radius: 5px;
    border-width: 2px;
    margin-bottom: 10%;
    padding-top: 2%;
  }
  
} 

</style>