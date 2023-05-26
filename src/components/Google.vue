<script setup="">
import {ref} from 'vue';
import Navigatin from './google/Navigation.vue'
import { useRouter } from 'vue-router'
import Googlebody from './google/Googlebody.vue'
import Footer from './google/Footer.vue'


const isHide=ref(true);


 const isHider=()=>{
  isHide.value=!isHide.value
 }

const isSearched = ref(false);

const onSearch = () => {
  isSearched.value = true;
  console.log('isSearch value is  :'+ isSearched.value);
  
};



</script>

<template>
<Navigatin v-on:showimges="isHider()"/> 
<Googlebody :isHide="isHide" v-on:onSearch="onSearch()" />
<Footer />

</template>

