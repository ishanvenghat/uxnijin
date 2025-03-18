<template>
    <div class="bg-white dark:bg-black min-h-screen flex flex-col">
      <div class="w-full px-4 md:px-9 py-4 md:py-9 flex flex-col justify-between items-center">
        <header class="w-full flex justify-between items-center h-12">
          <div class="text-blue-500 text-2xl font-tanker">My design works</div>
          <div
            class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
            @click="toggleMenu"
          >
            <div class="menu-text text-black dark:text-white text-2xl font-tanker">Menu</div>
          </div>
        </header>
        <main class="w-full flex-grow flex flex-col justify-start items-center py-6">
          <div class="w-full max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-4">
            <design-work-card v-for="work in designWorks" :key="work.title" :work="work" />
          </div>
        </main>
      </div>
      <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
    </div>
  </template>
  
  <script>
  import MenuOverlay from "../components/MenuOverlay.vue";
  import DesignWorkCard from "../components/DesignWorkCard.vue";
  import { designWorks } from "../data.js";
  
  export default {
    components: { MenuOverlay, DesignWorkCard },
    data() {
      return {
        isMenuOpen: false,
        designWorks,
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
    transform: translateY(30px);
    animation: slideUpFadeIn 0.6s ease-out forwards;
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
  .content-item:nth-child(5) {
    animation-delay: 0.5s;
  }
  .content-item:nth-child(6) {
    animation-delay: 0.6s;
  }
  @keyframes slideUpFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>