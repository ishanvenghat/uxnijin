<template>
   <div class="bg-white dark:bg-black min-h-screen flex flex-col">
     <div class="w-full px-4 md:px-9 py-4 md:py-9 flex flex-col justify-between items-center">
       <header class="w-full flex justify-between items-center h-12">
         <div class="text-red-500 text-2xl font-tanker">MY CREATION</div>
         <div
           class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
           @click="toggleMenu"
         >
           <div class="menu-text text-black dark:text-white text-2xl font-tanker">Menu</div>
         </div>
       </header>
       <main class="w-full flex-grow flex flex-col justify-center items-center py-72">
         <div class="app-list w-full max-w-[800px] flex gap-6 justify-center overflow-x-auto flex-wrap">
           <creation-card v-for="creation in creations" :key="creation.title" :creation="creation" />
         </div>
       </main>
     </div>
     <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
   </div>
 </template>
 
 <script>
 import MenuOverlay from "../components/MenuOverlay.vue";
 import CreationCard from "../components/CreationCard.vue";
 import { creations } from "../data.js";
 
 export default {
   components: { MenuOverlay, CreationCard },
   data() {
     return {
       isMenuOpen: false,
       creations,
     };
   },
   methods: {
     toggleMenu() {
       this.isMenuOpen = !this.isMenuOpen;
     },
   },
 };
 </script>
 
 <style scoped>
 .menu-button:hover {
   background-color: #938eff;
   box-shadow: 5px 5px 0px #5d59b2;
 }
 .menu-button:hover .menu-text {
   color: white;
 }
 .content-item {
   opacity: 0;
   transform: scale(0.8);
   animation: popIn 0.5s ease-out forwards;
 }
 .content-item:nth-child(1) {
   animation-delay: 0.1s;
 }
 .content-item:nth-child(2) {
   animation-delay: 0.2s;
 }
 .content-item:nth-child(3) {
   animation-delay: 0.3s;
 }
 .content-item:nth-child(4) {
   animation-delay: 0.4s;
 }
 @keyframes popIn {
   from {
     opacity: 0;
     transform: scale(0.8);
   }
   to {
     opacity: 1;
     transform: scale(1);
   }
 }
 </style>