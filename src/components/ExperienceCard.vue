 
<template>
    <div
      class="content-item experience-item transition-all w-full h-52 p-2 bg-neutral-100 dark:bg-[#1a1a1a] rounded-2xl flex flex-col justify-start items-start gap-2"
      @click="item.link && openLink(item.link)"
    >
      <img
        class="experience-image rounded-xl"
        :src="`/assets/${item.image}`"
        :alt="item.title"
        @error="handleImageError"
      />
      <div class="self-stretch inline-flex justify-between items-end w-full">
        <div class="inline-flex flex-col justify-start items-start gap-2">
          <div class="exp-title text-black dark:text-white text-xs font-medium font-inter">{{ item.title }}</div>
          <div class="exp-date text-black/50 dark:text-white/50 text-xs font-medium font-inter">{{ item.date }}</div>
        </div>
        <div v-if="item.live" class="flex justify-start items-center gap-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <div class="exp-status text-black/50 dark:text-white/50 text-[10px] font-medium font-inter">Live</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["item"],
    methods: {
      openLink(link) {
        window.open(link, "_blank");
      },
      handleImageError(e) {
        e.target.src = "https://placehold.co/345x144";
      },
    },
  };
  </script>
  
  <style scoped>
  .experience-item:hover {
    background-color: #e372ff;
    box-shadow: 5px 5px 0px #773a87;
    cursor: pointer;
  }
  .experience-item:hover .exp-title,
  .experience-item:hover .exp-date,
  .experience-item:hover .exp-status {
    color: white;
  }
  .experience-image {
    width: 100%;
    height: 144px;
    object-fit: cover;
  }
  </style>