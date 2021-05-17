<template>
<div class="picture-page">
    
    <Loader v-if="loading"/>
     <v-card
     v-if="!loading"
    class="mx-auto picture-info-card"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="currentPicture.url"
    >
    
    </v-img>

    <v-card-subtitle class="pb-0">
     <span class="card-info-title">Album ID:</span> <span>{{currentPicture.albumId}}</span>
    </v-card-subtitle>
     <v-card-subtitle class="pb-0">
     <span class="card-info-title">ID:</span> <span>{{currentPicture.id}}</span>
    </v-card-subtitle>

   <v-card-subtitle class="pb-0">
     <span class="card-info-title">Title:</span> <span>{{currentPicture.title}}</span>
    </v-card-subtitle>

     <v-card-subtitle class="pb-0">
     <span class="card-info-title">url:</span> <span><a :href="currentPicture.url">{{currentPicture.url}}</a></span>
    </v-card-subtitle>

 
  </v-card>
  
</div>
    
   
</template>

<script>
import Loader from '../components/Loader'
export default {
    name: 'Picture',
    props: {
         id:String
    },
    components: {
        Loader
    },
    data(){
        return {
            currentPicture: {},
            loading: true
        }
    },
    computed:{
        idN(){
            return this.$route.props.id
        }
    },

    methods: {
    async fetchPicture(){
           const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${this.id}`)
           const data = await res.json()
           return data
      },  
    },
    async created() {
      let picture = await this.fetchPicture()
      setTimeout(() => {
          this.loading = false
          this.currentPicture = picture
      },500)
      
      
      
    },
}
 

</script>


<style  scoped>
.picture-page {
    display: flex;
    justify-content: center;
}
.picture-info-card {
    text-align: start;
}
.card-info-title {
    font-weight: bold;
}
</style>