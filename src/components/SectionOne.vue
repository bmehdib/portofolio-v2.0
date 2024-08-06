<template>
  <section class="bg-primaryColor400 text-white p-3 h-screen overflow-hidden relative after: -z-30">
    <span
      class="absolute bg- bg-lightPurple w-2/5 h-2/3 aspect-square rounded-tl-full rounded-b right-0 bottom-0 blur-3xl opacity-60 -z-100"
    ></span>
    <span
      class="absolute bg-hardPurple w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-1/2 blur-3xl opacity-60 -z-10"
    ></span>
    <span
      class="absolute bg-lightBlue w-2/5 h-2/3 aspect-square rounded-bl-full rounded-b right-0 top-0 blur-3xl opacity-60 -z-10"
    ></span>
    <span
      class="absolute bg-white w-2/5 h-2/3 aspect-square left-0 top-0 opacity-10 -z-10 rounded-br-full rounded-tr-full blur-3xl"
    ></span>
    <span
      class="absolute bg-white w-2/5 h-2/3 aspect-square left-0 -bottom-44 opacity-10 -z-10 rounded-tr-full rounded-br-full blur-3xl"
    ></span>

    <header class="w-4/5 mx-auto">
      <nav
        class="flex justify-start bg-gradient-to-r from-transparent via-primaryColor500 to-transparent placeholder-opacity-100 mt-5 border-primaryColor500 border-2 text-center py-2 rounded-3xl"
      >
        <h2 class="mx-5 text-2xl my-auto font-k2D font-medium">Mehdi Beigi</h2>
        <div class="flex gap-8 items-center max-[890px]:justify-around max-[890px]:w-full">
          <a href="">HOME</a>
          <a href="">PROJECTS</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>
        </div>
        <a class="ml-auto mr-5 my-auto max-[890px]:hidden" href="">Contact Me</a>
      </nav>
    </header>
    <div class="flex h-dvh w-full">
      <div class="flex flex-col gap-10 w-1/3 justify-center items-center">
        <h1 class="text-9xl font-k2D font-bold w-3 z-10">
          Mehdi
          <br />
          Beigi
        </h1>
        <p
          class="w-0 text-nowrap font-sans font-medium leading-relaxed overflow-visibl z-10 max-[1134px]:hidden"
        >
          من یک توسعه دهنده فرانت هستم
          <br />
          کد نویسی به صورت ریموت ساکن شیراز
        </p>
      </div>
      <div class="w-1/2 mt-auto mr-6 mb-8 relative min-[780px]:max-w-4xl">
        <img class="w-16 absolute right-0" src="/images/Ellipse 4.png" alt="" />
        <img
          class="-z-20 ml-auto mr-20 min-w-96 min-[1170px]:w-5/6 min-[990px]:mr-0"
          src="/images/Ellipse 4.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
