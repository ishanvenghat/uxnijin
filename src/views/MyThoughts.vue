<template>
    <div class="bg-white dark:bg-black min-h-screen flex flex-col">
      <header class="w-full px-4 md:px-9 pt-4 md:pt-9">
        <div class="flex justify-between items-center h-12">
          <div class="text-orange-400 text-2xl font-tanker">My thoughts</div>
          <div
            class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
            @click="toggleMenu"
          >
            <div class="menu-text text-black dark:text-white text-2xl font-tanker">Menu</div>
          </div>
        </div>
      </header>
      <main class="flex-grow flex flex-col px-4 md:px-9 py-4 md:py-9">
        <div class="w-full max-w-[800px] mx-auto flex flex-col items-start gap-6">
          <div v-if="loading" class="w-full p-2 rounded-2xl flex justify-center items-start gap-4 skeleton">
            <div class="skeleton-image"></div>
            <div class="flex-1 flex flex-col justify-between items-start gap-2">
              <div class="skeleton-text"></div>
              <div class="skeleton-subtext"></div>
              <div class="skeleton-subtext w-20"></div>
            </div>
          </div>
          <div v-else-if="error" class="text-black dark:text-white text-sm font-medium font-inter">
            Failed to load articles. Please try again later.
          </div>
          <div v-else class="w-full flex flex-col items-start gap-6">
            <blog-card v-for="item in blogItems" :key="item.link" :item="item" />
          </div>
        </div>
      </main>
      <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
    </div>
  </template>
  
  <script>
  import MenuOverlay from "../components/MenuOverlay.vue";
  import BlogCard from "../components/BlogCard.vue";
  
  export default {
    components: { MenuOverlay, BlogCard },
    data() {
      return {
        isMenuOpen: false,
        blogItems: [],
        loading: true,
        error: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      async fetchBlogPosts() {
        try {
          const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nijinmuhammed");
          const data = await response.json();
          this.blogItems = data.items;
        } catch (error) {
          this.error = true;
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchBlogPosts();
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
  .skeleton {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  @media (prefers-color-scheme: dark) {
    .skeleton {
      background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
    }
  }
  .skeleton-image {
    width: 180px;
    height: 100px;
    border-radius: 12px;
  }
  .skeleton-text {
    width: 60%;
    height: 12px;
    border-radius: 4px;
  }
  .skeleton-subtext {
    width: 40%;
    height: 10px;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    .skeleton-image {
      width: 124px;
      height: 73px;
    }
  }
  @keyframes shimmer {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
  </style>