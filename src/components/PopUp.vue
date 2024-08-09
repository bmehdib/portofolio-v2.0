<template>
  <section
    class="bg-lightPurple shadow-md shadow-black min-w-52 min-h-52 absolute p-5 rounded-xl flex flex-col justify-around text-center min-[1080px]:right-10"
  >
    <slot />
    <button @click="$emit('close')" class="bg-primaryColor400 rounded-xl p-1">OK</button>
  </section>
</template>
