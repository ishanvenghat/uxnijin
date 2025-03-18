<template>
    <div class="bg-white dark:bg-black min-h-screen flex flex-col">
      <div class="w-full px-4 md:px-9 py-4 md:py-9 flex flex-col justify-between items-center">
        <header class="w-full flex justify-between items-center h-12">
          <div class="text-green-500 text-2xl font-tanker">say hello</div>
          <div
            class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
            @click="toggleMenu"
          >
            <div class="menu-text text-black dark:text-white text-2xl font-tanker">Menu</div>
          </div>
        </header>
        <main class="w-full flex-grow flex flex-col justify-center items-center">
          <div class="w-full max-w-[800px] flex flex-col justify-center items-center gap-8 md:gap-16 min-h-[calc(100vh-120px)]">
            <div
              v-if="!submitted"
              class="form-container w-full md:w-[361px] flex flex-col justify-center items-start gap-8 md:gap-16 transition-opacity duration-500"
              :class="{ 'opacity-0': submitting }"
            >
              <form @submit.prevent="submitForm" class="w-full flex flex-col gap-4">
                <div class="content-item flex flex-col gap-1">
                  <label class="text-black dark:text-white text-base font-inter opacity-75">Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    class="w-full px-4 py-3 border border-black border-opacity-10 dark:border-white dark:border-opacity-20 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black dark:text-white dark:bg-black text-base font-inter placeholder-black placeholder-opacity-25 dark:placeholder-white dark:placeholder-opacity-50"
                  />
                </div>
                <div class="content-item flex flex-col gap-1">
                  <label class="text-black dark:text-white text-base font-inter opacity-75">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    class="w-full px-4 py-3 border border-black border-opacity-10 dark:border-white dark:border-opacity-20 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black dark:text-white dark:bg-black text-base font-inter placeholder-black placeholder-opacity-25 dark:placeholder-white dark:placeholder-opacity-50"
                  />
                </div>
                <div class="content-item flex flex-col gap-1">
                  <label class="text-black dark:text-white text-base font-inter opacity-75">Message</label>
                  <textarea
                    v-model="form.message"
                    placeholder="What you want to say"
                    rows="4"
                    required
                    class="w-full px-4 py-3 border border-black border-opacity-10 dark:border-white dark:border-opacity-20 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black dark:text-white dark:bg-black text-base font-inter placeholder-black placeholder-opacity-25 dark:placeholder-white dark:placeholder-opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="content-item submit-button transition-all w-full px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
                >
                  <div class="text-white text-2xl font-tanker">Submit</div>
                </button>
              </form>
              <div class="content-item social-links w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <social-link v-for="link in socialLinks" :key="link.href" :link="link" />
              </div>
            </div>
            <div v-if="submitted" class="w-full md:w-[361px] flex flex-col items-center gap-6">
              <p class="text-black dark:text-white text-lg font-medium font-tanker text-center animate-[slideUpFadeIn_0.6s_ease-out_forwards]">
                Thank you for your response
              </p>
              <router-link
                to="/"
                class="submit-button transition-all w-36 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer animate-[slideUpFadeIn_0.6s_ease-out_forwards_0.2s]"
              >
                <div class="text-white text-2xl font-tanker">Back to home</div>
              </router-link>
            </div>
          </div>
        </main>
      </div>
      <menu-overlay :is-open="isMenuOpen" @close="toggleMenu" />
    </div>
  </template>
  
  <script>
  import MenuOverlay from "../components/MenuOverlay.vue";
  import SocialLink from "../components/SocialLink.vue";
  
  export default {
    components: { MenuOverlay, SocialLink },
    data() {
      return {
        isMenuOpen: false,
        form: {
          name: "",
          email: "",
          message: "",
        },
        submitting: false,
        submitted: false,
        socialLinks: [
          { href: "https://www.instagram.com/uxnijin/", text: "Instagram" },
          { href: "https://x.com/MuhammedNijin", text: "X" },
          { href: "https://www.threads.net/@uxnijin", text: "Threads" },
          { href: "https://medium.com/@nijinmuhammed", text: "Medium" },
          { href: "mailto:nijinmuhammed@example.com", text: "Email" },
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      async submitForm() {
        this.submitting = true;
        const formData = new FormData();
        formData.append("entry.1901385788", this.form.name);
        formData.append("entry.103601465", this.form.email);
        formData.append("entry.75164446", this.form.message);
  
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdXo6hG3eDnvYpr1PR4QdxojOStOeRGOQB7tLMQCXEtFWcQHA/formResponse",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          }
        );
  
        setTimeout(() => {
          this.submitting = false;
          this.submitted = true;
        }, 500);
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
  .submit-button {
    background-color: #27be4a;
  }
  .submit-button:hover {
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
  .content-item:nth-child(4) {
    animation-delay: 0.4s;
  }
  .content-item:nth-child(5) {
    animation-delay: 0.5s;
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
  @media (max-width: 768px) {
    .form-container {
      width: 100%;
      max-width: 361px;
    }
    .social-links {
      flex-direction: column;
      gap: 1rem;
    }
    .social-link {
      width: 100%;
    }
  }
  </style>