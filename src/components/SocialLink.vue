 
<template>
    <a
      :href="link.href"
      target="_blank"
      class="social-link transition-all w-full h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
    >
      <div class="social-text text-black dark:text-white text-2xl font-tanker">{{ link.text }}</div>
    </a>
  </template>
  
  <script>
  export default {
    props: ["link"],
  };
  </script>
  
  <style scoped>
  .social-link {
    background-color: #dbdbdb;
  }
  .social-link:hover {
    background-color: #27be4a;
    box-shadow: 5px 5px 0px #006d19;
  }
  .social-link:hover .social-text {
    color: white;
  }
  @media (prefers-color-scheme: dark) {
    .social-link {
      background-color: #4b4b4b;
    }
  }
  </style>