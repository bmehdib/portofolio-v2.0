<template>
  <section class="bg-primaryColor500 text-white p-10 relative min-h-96 overflow-hidden">
    <span
      class="absolute bg- bg-lightPurple w-2/5 h-2/3 aspect-square rounded-tl-full rounded-b right-0 bottom-0 blur-3xl opacity-10 pointer-events-none"
    ></span>
    <span
      class="absolute bg-hardPurple w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-10 pointer-events-none"
    ></span>
    <h1 class="text-7xl font-k2D font-bold py-10 z-50 text-center">My Skills</h1>
    <main
      class="grid grid-cols-2 gap-8 my-8 text-center font-serif text-2xl justify-items-center max-[680px]:grid-cols-1"
    >
      <div id="look" class="border-2 rounded-md w-64 border-white relative opacity-0">
        <p>Css</p>
      </div>
      <div id="look" class="border-2 rounded-md w-64 border-white relative opacity-0">
        <p>JavaScript</p>
      </div>
      <div id="look" class="border-2 rounded-md w-64 border-white relative opacity-0">
        <p>TailWind</p>
      </div>
      <div id="look" class="border-2 rounded-md w-64 border-white relative opacity-0">
        <p>VueJs</p>
      </div>
    </main>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const elements = document.querySelectorAll('#look')
  const options = {
    root: null,
    threshold: 1,
    rootMargin: ''
  }
  const observer = new IntersectionObserver(function (enteries) {
    enteries.forEach((entery) => {
      if (entery.isIntersecting == true) {
        entery.target.classList.remove('opacity-0')
        entery.target.classList.add('animate-expand')
      }
    })
  }, options)
  elements.forEach((el) => {
    observer.observe(el)
  })
})
</script>
