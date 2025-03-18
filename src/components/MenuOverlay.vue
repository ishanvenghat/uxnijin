<template>
  <div
    id="menuOverlay"
    class="menu-overlay"
    :style="{ display: isOpen ? 'flex' : 'none' }"
  >
    <div class="w-full px-4 md:px-9 pt-4 md:pt-9">
      <div class="flex justify-between items-center h-12">
        <div class="text-indigo-400 text-2xl font-tanker">UXNIJIN</div>
        <div
          class="menu-button transition-all w-[72px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer"
          @click="$emit('close')"
        >
          <div class="menu-text text-black dark:text-white text-2xl font-tanker">
            Close
          </div>
        </div>
      </div>
    </div>
    <div class="w-full px-4 md:px-9 flex-grow flex justify-center items-center">
      <div class="w-full max-w-[800px] flex flex-col justify-center items-center gap-4">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          :class="`menu-item menu-item-${item.class} ${item.color} transition-all w-[${item.width}px] h-12 px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer`"
          @click.native="$emit('close')"
        >
          <div :class="`menu-text text-${item.color}-400 text-2xl font-tanker`">
            {{ item.label }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      menuItems: [
        { path: "/", label: "Home", class: "home", width: 72, color: "text-indigo-500" },
        {
          path: "/mycreation",
          label: "My creation",
          class: "mycreation",
          width: 130,
          color: "text-red-500",
        }, // ✅ Use text-red-500 instead of "red"
        {
          path: "/mydesignworks",
          label: "My design works",
          class: "mydesignworks",
          width: 175,
          color: "text-blue-500",
        },
        {
          path: "/myexperience",
          label: "my Experience",
          class: "myexperience",
          width: 150,
          color: "text-purple-500",
        },
        {
          path: "/mythoughts",
          label: "my thoughts",
          class: "mythoughts",
          width: 137,
          color: "text-orange-500",
        },
        {
          path: "/sayhello",
          label: "say hello",
          class: "sayhello",
          width: 107,
          color: "text-green-500",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  inset: 0;
  background-color: white;
  z-index: 50;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media (prefers-color-scheme: dark) {
  .menu-overlay {
    background-color: black;
  }
}
.menu-button:hover {
  background-color: #938eff;
  box-shadow: 5px 5px 0px #5d59b2;
}
.menu-button:hover .menu-text {
  color: white;
}
.menu-item-home:hover {
  background-color: #938eff;
  box-shadow: 5px 5px 0px #5d59b2;
}
.menu-item-mycreation:hover {
  background-color: #ff3f4c;
  box-shadow: 5px 5px 0px #97242c;
}
.menu-item-mydesignworks:hover {
  background-color: #2d8fff;
  box-shadow: 5px 5px 0px #194f8d;
}
.menu-item-myexperience:hover {
  background-color: #e372ff;
  box-shadow: 5px 5px 0px #773a87;
}
.menu-item-mythoughts:hover {
  background-color: #ff9d14;
  box-shadow: 5px 5px 0px #a15e00;
}
.menu-item-sayhello:hover {
  background-color: #27be4a;
  box-shadow: 5px 5px 0px #006d19;
}
.menu-item:hover .menu-text {
  color: white;
}
</style>
