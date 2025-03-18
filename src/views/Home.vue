<template>
  <div class="bg-white dark:bg-black min-h-screen flex flex-col">
    <header class="w-full px-4 md:px-9 pt-4 md:pt-9">
      <div class="flex justify-between items-center h-12">
        <div class="text-indigo-400 text-2xl font-tanker">UXNIJIN</div>
        <div
          class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
          @click="toggleMenu"
        >
          <div class="menu-text text-black dark:text-white text-2xl font-tanker">
            Menu
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow flex justify-center items-center px-4 md:px-9 py-4 md:py-9">
      <div
        class="w-full max-w-[800px] flex flex-col justify-center items-center content-container md:gap-2.5"
      >
        <img
          class="content-item w-full h-[472px] rounded-2xl object-cover placeholder-image"
          src="/assets/about.png"
          alt="Best Product Designer in Kerala"
        />
        <div
          class="content-item w-full max-w-[370px] md:max-w-[800px] text-left text-black dark:text-white text-sm font-medium font-inter"
        >
          Hey, I'm Nijin<br /><br />I design products that just work—stuff you'd want in
          your hands. This spot's my world: my projects, my daydreams, everything I'm
          about.<br /><br />I'm the one you call when you want something fresh and solid.
          What do you say—wanna chat?
        </div>
        <router-link
          to="/sayhello"
          class="content-item say-hello-button transition-all w-full h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
        >
          <div class="text-white text-2xl font-tanker">say hello</div>
        </router-link>
      </div>
    </main>
    <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
  </div>
</template>

<script>
import MenuOverlay from "../components/MenuOverlay.vue";

export default {
  components: { MenuOverlay },
  data() {
    return {
      isMenuOpen: false,
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
.say-hello-button {
  background-color: #27be4a;
}
.say-hello-button:hover {
  box-shadow: 5px 5px 0px #006d19;
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
@media (max-width: 767px) {
  .content-container {
    gap: 1rem;
  }
  .placeholder-image {
    height: 200px;
  }
}
</style>
