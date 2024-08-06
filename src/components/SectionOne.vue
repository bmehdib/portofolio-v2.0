<template>
  <section class="bg-primaryColor400 text-white p-3 h-screen overflow-hidden relative z-0">
    <span
      class="absolute bg- bg-lightPurple w-2/5 h-2/3 aspect-square rounded-tl-full rounded-b right-0 bottom-0 blur-3xl opacity-40 z-10"
    ></span>
    <span
      class="absolute bg-hardPurple w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-30 z-10"
    ></span>
    <span
      class="absolute bg-lightBlue w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-30 z-10"
    ></span>
    <span
      class="absolute bg-white w-2/5 h-2/3 aspect-square left-0 top-0 opacity-20 -z-5 rounded-br-full rounded-tr-full blur-3xl z-10"
    ></span>
    <span
      class="absolute bg-white w-2/5 h-2/3 aspect-square left-0 -bottom-44 opacity-10 -z-5 rounded-tr-full rounded-br-full blur-3xl z-10"
    ></span>
    <nav class="absolute right-3 top-1/3 flex flex-col gap-6 z-20 max-[538px]:hidden">
      <a target="_blank" href="https://www.instagram.com/mehd1.beigi">
        <img src="/images/Vector-1.png" alt="" />
      </a>
      <a target="_blank" href="https://github.com/bmehdib">
        <img src="/images/Vector.png" alt="" />
      </a>
    </nav>
    <header class="grid w-4/5 mx-auto z-20">
      <nav
        class="flex justify-start bg-gradient-to-r from-transparent via-primaryColor500 to-transparent mt-5 border-primaryColor500 border-2 text-center py-2 rounded-3xl z-20 max-[538px]:hidden"
      >
        <h2 class="mx-5 text-2xl my-auto font-k2D font-medium z-10">
          Mehdi
          <br />
          Beigi
        </h2>
        <div class="flex gap-8 items-center max-[890px]:justify-around max-[890px]:w-full">
          <a class="hover:border-b-2" href="#">HOME</a>
          <a class="hover:border-b-2" href="#">ABOUT</a>
          <a class="hover:border-b-2" href="#">CONTACT</a>
        </div>
        <a class="ml-auto mr-5 my-auto max-[890px]:hidden z-30" href="">Contact Me</a>
      </nav>
      <button @click="mobileMenue = true" class="transition min-[539px]:hidden">|||</button>
    </header>
    <div class="flex h-dvh w-full">
      <div class="flex flex-col gap-10 w-1/3 justify-top items-center mt-20 [441px]:justify-center">
        <h1 class="text-9xl font-k2D font-bold w-3 z-10 max-[441px]:text-6xl">
          Mehdi
          <br />
          Beigi
        </h1>
        <p
          class="w-0 text-nowrap font-sans font-medium leading-relaxed overflow-visibl z-10 max-[1134px]:hidden max-[539px]:flex max-[441px]:mr-auto"
        >
          من یک توسعه دهنده فرانت هستم
          <br />
          کد نویسی به صورت ریموت ساکن شیراز
        </p>
      </div>
      <div class="w-1/2 mt-auto mr-6 mb-8 relative min-[780px]:max-w-4xl">
        <img class="w-16 absolute right-0" src="/images/Ellipse 4.png" alt="" />
        <img class="absolute w-52 top-0 animate-float z-20" src="/images/astro.png" alt="" />
        <img
          class="-z-20 ml-auto mr-20 min-w-96 min-[1170px]:w-5/6 min-[990px]:mr-0"
          src="/images/Ellipse 4.png"
          alt=""
        />
      </div>
    </div>
    <!-- ------------------mobile-------------------- -->
    <div
      v-if="mobileMenue"
      class="absolute bg-hardPurple top-0 left-0 w-full h-screen z-30 flex justify-center items-center"
    >
      <nav class="flex flex-col text-center gap-8 text-black font-bold">
        <button @click="mobileMenue = false" class="absolute top-5 right-1/2 text-xl">x</button>
        <a @click="mobileMenue = false" class="hover:border-b-2" href="#">HOME</a>
        <a @click="mobileMenue = false" class="hover:border-b-2" href="#">ABOUT</a>
        <a @click="mobileMenue = false" class="hover:border-b-2" href="#">CONTACT</a>
        <div class="flex gap-16 items-center mt-10">
          <a target="_blank" href="https://www.instagram.com/mehd1.beigi">
            <img class="mx-auto" src="/images/Vector-1.png" alt="" />
            <p>instagram</p>
          </a>
          <a target="_blank" href="https://github.com/bmehdib">
            <img src="/images/Vector.png" alt="" />
            <p>github</p>
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const mobileMenue = ref(false)
</script>
