<template>
<section class="main-section" data-app>
 
  <v-select
    :items="selectOptions"
     label="Выберете категорию"
     v-model="selected"
     @change="onChange($event)"
    ></v-select>

  <div class="cards-container" >
    <Loader v-if="loading"/>
   <PictureCard  v-for="picture in items"
   :key="picture.id"
   :id="picture.id"
   :picture="picture"
   
   />
 </div>
</section>
 
</template>

<script>

import PictureCard from '../components/PictureCard'
import Loader from '../components/Loader'
import {store} from '../store/store'
import {assignCategory, selectOptions} from '../utils'
export default {
  name: 'Home',
  
  store: store,
  components: {
    PictureCard,
    Loader
  },
  data() {
    return {
      items: [],
      selected: '',
      selectOptions: selectOptions,
      loading: true
    }
  },
  computed:{
    pictures(){
      return store.state.pictures
    }
  },
  methods: {
    
    async fetchTasks() {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=24')
      const data = await res.json()
      store.commit('addProducts',{
        pictures:assignCategory(Object.freeze(data)) 
      })
    },
   onChange(event){
      console.log(event)
      let newPictures = this.pictures.pictures.filter((item) => Number(item.category) === Number(event))
      this.items = newPictures
    }
  },
  async created() {
   await this.fetchTasks()
   setTimeout(() =>{
     this.loading = false
     let newPictures = this.pictures.pictures
     this.items = newPictures
      
   },1000)
   
 },
}
</script>

<style scoped>
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
    margin-top: 3%;
  }
  .main-section {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  }
</style>