<script setup>
const emit = defineEmits(["showimges","showsomali"]);
const emmiter = () => {
  emit("showimges");
};

const somaliEmmiter=()=>{
  emit("showsomali")
}
</script>

<template>
  <div class="flex justify-end">
    <a @click="somaliEmmiter()" class="m-3" href="#">Gmail</a>
    <a class="m-3" href="#">Images</a>
    <svg
      class="h-8 w-7 m-3"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="#888888"
        d="M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
      />
    </svg>
    <button @click="emmiter()" class="m-3 bg-blue-600 text-white">
      sign in
    </button>
  </div>
</template>

<!-- assigment

google showimges
 //vue component to component comminication 
routed to googlesesrched pages on clicking of search buttons on the input feilds  -->
