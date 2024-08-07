<template>
  <section
    :id="About - me"
    class="bg-primaryColor400 text-white p-3 overflow-hidden relative z-10 pt-20 pb-20 min-h-screen"
  >
    <span
      class="absolute bg- bg-lightPurple w-2/5 h-2/3 aspect-square rounded-tl-full rounded-b right-0 bottom-0 blur-3xl opacity-10 -z-10"
    ></span>
    <span
      class="absolute bg-hardPurple w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-10 -z-10"
    ></span>
    <span
      class="absolute bg-teal-300 w-2/5 h-2/3 aspect-square rounded-br-full rounded-b left-0 top-0 blur-3xl opacity-10 -z-10"
    ></span>
    <h1
      class="text-9xl font-bold font-k2D absolute z-20 right-1/4 top-20 max-[800px]:text-5xl max-[800px]:right-1/2 max-[800px]:translate-x-1/2 max-[800px]:text-center max-[800px]:top-0"
    >
      About
      <br />
      me
    </h1>
    <div
      class="flex items-center justify-around max-[960px]:flex-col max-[960px]:text-center max-[960px]:gap-16 max-[800px]:mt-10"
    >
      <div class="relative">
        <img id="observe" class="scale-0" src="/images/Ellipse 13.png " alt="" />
        <img class="absolute max-w-20 top-0 animate-planet" src="/images/Ellipse 4.png" alt="" />
      </div>
      <div>
        <p id="observe" class="max-w-72 scale-0">
          محمد مهدی بیگی ساکن شیراز دانشجو کارشناسی کامپیوتر.توسعه دهنده وب در بخش فرانت
          <br />
          (HTML,<span class="text-blue-400">CSS</span>,<span class="text-yellow-300"
            >JavaScript</span
          >,<span class="text-green-400">VueJs</span>,
          <span class="text-purple-400">Tailwindcss</span>)
        </p>
        <button
          id="observe"
          class="mt-10 bg-lightPurple text-lg font-k2D font-bold p-2 rounded-xl cursor-pointer z-50 scale-0"
        >
          Contact Me
        </button>
      </div>
    </div>
    <img class="absolute right-2 top-2/3 -z-10 w-96" src="/images/dot pattern.png" alt="" />
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => {
  const el = document.querySelectorAll('#observe')
  const options = {
    root: null,
    threshold: 1,
    rootMargin: '-50px'
  }
  const observer = new IntersectionObserver(function (enteries, observer) {
    enteries.forEach((entery) => {
      if (entery.isIntersecting == true) {
        entery.target.classList.add('animate-apear')
      }
    })
  }, options)

  el.forEach((e) => {
    observer.observe(e)
  })
})
</script>
<style scoped></style>
