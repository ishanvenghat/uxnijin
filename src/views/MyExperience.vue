<template>
    <div class="bg-white dark:bg-black min-h-screen flex flex-col">
      <header class="w-full px-4 md:px-9 pt-4 md:pt-9">
        <div class="flex justify-between items-center h-12">
          <div class="text-purple-400 text-2xl font-tanker">MY EXPERIENCE</div>
          <div
            class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
            @click="toggleMenu"
          >
            <div class="menu-text text-black dark:text-white text-2xl font-tanker">Menu</div>
          </div>
        </div>
      </header>
      <main class="flex-grow flex justify-center items-center px-4 md:px-9 py-4 md:py-9">
        <div class="w-full max-w-[800px] flex flex-col justify-start items-start gap-8">
          <div class="w-full flex flex-col justify-start items-start gap-6">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <experience-card v-for="exp in workExperience" :key="exp.title" :item="exp" />
            </div>
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-6">
            <div class="text-purple-400 text-lg font-normal font-tanker">Education</div>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <experience-card v-for="edu in education" :key="edu.title" :item="edu" />
            </div>
          </div>
        </div>
      </main>
      <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
    </div>
  </template>
  
  <script>
  import MenuOverlay from "../components/MenuOverlay.vue";
  import ExperienceCard from "../components/ExperienceCard.vue";
  import { workExperience, education } from "../data.js";
  
  export default {
    components: { MenuOverlay, ExperienceCard },
    data() {
      return {
        isMenuOpen: false,
        workExperience,
        education,
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
  </style>