 
<template>
    <a :href="creation.link" target="_blank" class="content-item app-item">
      <img
        class="app-icon"
        :src="creation.icon"
        :alt="creation.title"
        @error="handleImageError"
      />
      <div class="app-name">{{ creation.title }}</div>
    </a>
  </template>
  
  <script>
  export default {
    props: ["creation"],
    methods: {
      handleImageError(e) {
        e.target.src = "https://placehold.co/80x80";
      },
    },
  };
  </script>
  
  <style scoped>
  .app-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .app-list:hover .app-item {
    opacity: 0.25;
  }
  .app-item:hover {
    opacity: 1;
    transform: rotate(20deg);
  }
  .app-icon {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    outline: 4px solid #f1f1f1;
    object-fit: cover;
    transition: box-shadow 0.3s ease;
  }
  .app-name {
    color: #333;
    font-size: 14px;
    font-family: "Inter";
    font-weight: 500;
    text-align: center;
    word-wrap: break-word;
    transition: color 0.3s ease;
  }
  @media (prefers-color-scheme: dark) {
    .app-name {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    .app-icon {
      width: 60px;
      height: 60px;
      padding: 6px 10px;
    }
    .app-name {
      font-size: 12px;
    }
  }
  </style>