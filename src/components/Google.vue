<script setup="">
import {ref} from 'vue';
import Navigatin from './google/Navigation.vue'
import { useRouter } from 'vue-router'
import Googlebody from './google/Googlebody.vue'
import Footer from './google/Footer.vue'

const isHide=ref(true);
const siomaliHide=ref(false)

 const isHider=()=>{
  isHide.value=!isHide.value
 }
   

</script>

<template>
  <!-- <button @click="goToGoogleSearched">goToGoogleSearched</button> -->
 
<Navigatin v-on:showimges="isHider()"  v-on:showsomali="IsSomaliHide()"/> 
<Googlebody :isHide="isHide"  />

<Footer />
        
</template>


<!-- 
 <script>

import Navigatin from './google/Navigation.vue'
import Googlebody from './google/Googlebody.vue'
import Footer from './google/Footer.vue'

export default {
 components: { Google},
}
</script>


<template>
  <div>

<Navigatin v-on:showimges="isHider()"  v-on:showsomali="IsSomaliHide()"/> 
<Googlebody :isHide="isHide" muller="I am muller" />
<Footer />
      
  </div>
</template>
 -->
