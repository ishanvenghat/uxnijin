 
<template>
    <div
      class="content-item blog-item transition-all w-full p-2 rounded-2xl flex justify-center items-start gap-4"
      @click="openLink(item.link)"
    >
      <img
        class="w-[124px] md:w-[180px] h-[73px] md:h-[100px] rounded-xl object-cover"
        :src="thumbnail"
        alt="Article thumbnail"
        @error="handleImageError"
      />
      <div class="flex-1 h-full flex flex-col justify-between items-start">
        <div class="title-text w-full md:w-[580px] text-black dark:text-white text-sm font-medium font-inter">
          {{ item.title }}
        </div>
        <div
          class="description-text article-description w-full md:w-[580px] mt-1 text-black dark:text-white text-opacity-50 dark:text-opacity-70 text-xs font-normal font-inter"
        >
          {{ description }}
        </div>
        <div
          class="read-time w-full md:w-[580px] text-black text-opacity-40 dark:text-white dark:text-opacity-40 text-xs font-normal font-inter mt-1"
        >
          {{ readTime }} min read
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["item"],
    computed: {
      thumbnail() {
        const match = this.item.content.match(/<img[^>]+src=["'](.*?)["']/i);
        return match ? match[1] : "/api/placeholder/180/100";
      },
      wordCount() {
        return this.item.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
      },
      readTime() {
        return Math.max(1, Math.ceil(this.wordCount / 200));
      },
      description() {
        return this.item.content.replace(/<[^>]*>/g, "").trim().slice(0, 160) + "...";
      },
    },
    methods: {
      openLink(link) {
        window.open(link, "_blank");
      },
      handleImageError(e) {
        e.target.src = "/api/placeholder/180/100";
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-item:hover {
    background-color: #ff9d14;
    box-shadow: 5px 5px 0px #a15e00;
    cursor: pointer;
  }
  .blog-item:hover .title-text {
    color: white;
  }
  .blog-item:hover .description-text,
  .blog-item:hover .read-time {
    color: rgba(255, 255, 255, 0.5);
  }
  .article-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 768px) {
    .blog-item {
      height: auto;
      min-height: 81px;
    }
    .blog-item > div {
      min-height: 73px;
    }
    .article-description {
      display: none;
    }
  }
  </style>