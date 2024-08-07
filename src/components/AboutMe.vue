<template>
  <section class="bg-primaryColor400 relative text-white p-3 overflow-hidden relative z-10 py-48">
    <span
      class="absolute bg- bg-lightPurple w-2/5 h-2/3 aspect-square rounded-tl-full rounded-b right-0 bottom-0 blur-3xl opacity-10 -z-10"
    ></span>
    <span
      class="absolute bg-hardPurple w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-10 -z-10"
    ></span>
    <h1
      class="text-9xl font-bold font-k2D absolute z-20 right-1/4 top-20 max-[800px]:text-5xl max-[800px]:right-1/2 max-[800px]:translate-x-1/2 max-[800px]:text-center"
    >
      About
      <br />
      me
    </h1>
    <div
      class="flex items-center justify-around max-[960px]:flex-col max-[960px]:text-center max-[960px]:gap-16"
    >
      <div class="relative">
        <img src="/images/Ellipse 13.png" alt="" />
        <img class="absolute max-w-20 top-0 animate-planet" src="/images/Ellipse 4.png" alt="" />
      </div>
      <div>
        <p class="max-w-72">
          محمد مهدی بیگی ساکن شیراز دانشجو کارشناسی کامپیوتر.توسعه دهنده وب در بخش فرانت
          <br />
          (HTML,CSS,JavaScript,VueJs,Tailwindcss)
        </p>
        <button
          class="mt-10 bg-lightPurple text-lg font-k2D font-bold p-2 rounded-xl cursor-pointer z-50"
        >
          Contact Me
        </button>
      </div>
    </div>
    <img class="absolute right-2 top-2/3 -z-10 w-96" src="/images/dot pattern.png" alt="" />
  </section>
</template>
