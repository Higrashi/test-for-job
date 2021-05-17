<template>
 <header>
  <div id="nav">
      <router-link to="/" class='nav-link'>Галлерея</router-link> 
      <router-link to="/about" class='nav-link'>Обо мне</router-link>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://res.cloudinary.com/dmq5fxzth/image/upload/v1621256444/avatar_wwdite.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
      
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
               Анатолий
              </v-list-item-title>
              <v-list-item-subtitle>rtp457@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      </v-list>
      
        
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
           <v-list-item-title>
             <router-link to="/" class='nav-link' >
             Галлерея
             </router-link>
             </v-list-item-title> 
     
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
               <router-link to="/about" class='nav-link'>
               Обо мне
               </router-link>
               </v-list-item-title>
          </v-list-item>

         
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</header>
</template>

<script>


export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  data(){
        return {
            drawer: false
        }
    },
  components: {
    
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  },
  
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid lightgrey;
 -webkit-box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2);
 -moz-box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2); 
 box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2);
 height: 70px;
 margin-bottom: 20px;
}
.nav-link {
  text-decoration: none;
  font-size: 1rem;
  margin: 10px;
}
</style>
