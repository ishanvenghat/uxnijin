 
<template>
    <div
      class="content-item experience-item w-full flex flex-col justify-between items-start gap-3 rounded-2xl p-4 bg-neutral-100 dark:bg-[#1a1a1a]"
    >
      <img
        class="experience-image rounded-xl"
        :src="work.thumbnail"
        :alt="work.title"
        @error="handleImageError"
      />
      <div class="w-full flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div class="exp-title text-black dark:text-white text-sm font-medium font-inter">{{ work.title }}</div>
          <div
            v-if="work.description"
            class="text-black/70 dark:text-white/70 text-xs font-inter min-h-[2.5rem]"
          >
            {{ work.description }}
          </div>
          <div v-else class="min-h-[2.5rem]"></div>
          <div class="exp-date text-black/50 dark:text-white/50 text-xs font-medium font-inter">{{ work.date }}</div>
        </div>
        <div class="flex gap-2">
          <a
            :href="work.designLink"
            target="_blank"
            class="design-button transition-all w-[120px] h-10 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
          >
            <div class="button-text text-white text-lg font-tanker">View Design</div>
          </a>
          <a
            v-if="work.liveLink"
            :href="work.liveLink"
            target="_blank"
            class="live-button transition-all w-[120px] h-10 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
          >
            <div class="button-text text-white text-lg font-tanker">Live Preview</div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["work"],
    methods: {
      handleImageError(e) {
        e.target.src = "https://placehold.co/345x144";
      },
    },
  };
  </script>
  
  <style scoped>
  .experience-image {
    width: 100%;
    height: 144px;
    object-fit: cover;
  }
  .design-button {
    background-color: #2d8fff;
  }
  .design-button:hover {
    background-color: #2d8fff;
    box-shadow: 5px 5px 0px #194f8d;
  }
  .design-button:hover .button-text {
    color: white;
  }
  .live-button {
    background-color: #27be4a;
  }
  .live-button:hover {
    background-color: #27be4a;
    box-shadow: 5px 5px 0px #006d19;
  }
  .live-button:hover .button-text {
    color: white;
  }
  </style>