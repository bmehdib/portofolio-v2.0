<template>
  <section
    class="isolate min-h-screen bg-primaryColor500 text-white flex flex-col text-center justify-center items-center p-6 relative"
  >
    <header class="">
      <h1 class="text-7xl font-k2D font-bold">contact Me</h1>
    </header>
    <main class="w-2/4 h-3/4 flex flex-col text-start gap-7 mt-40">
      <div class="flex flex-col">
        <label class="text-xl" for="input">Name:</label>
        <input
          v-model="name"
          class="contact-input"
          placeholder="نام خود را وارد کنید"
          type="text"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-xl" for="input">Email:</label>
        <input
          v-model="email"
          class="contact-input"
          placeholder="نشانی ایمیل خود را وارد کنید"
          type="email"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-xl" for="input">Message....</label>
        <input
          v-model="meesage"
          class="contact-input"
          placeholder="پیام خودرا اینجا وارد کنید"
          type="text"
        />
      </div>
      <button
        @click.prevent="clicked()"
        class="mt-10 bg-lightPurple/80 text-lg font-sans font-bold p-2 rounded-xl cursor-pointer"
      >
        ارسال
      </button>
    </main>
    <span class="circle">
      <img class="" src="/images/Ellipse 39.png" alt="" />
    </span>
    <footer>
      <div
        class="mt-10 flex gap-6 font-sans text-xl bg-lightPurple p-3 rounded-xl cursor-pointer"
        @click.prevent="copy()"
      >
        <p>mehdibigi1383@gmail.com</p>
        <h1 class="max-[422px]:hidden">:ایمیل من</h1>
      </div>
    </footer>
    <PopUp :class="pop ? animation : ''" @close="closePop()" v-if="pop">
      <h1 class="font-bold">{{ popmessage }}</h1>
    </PopUp>
  </section>
</template>
<script setup>
import PopUp from '@/components/PopUp.vue'
import { ref } from 'vue'

const name = ref(null)
const email = ref(null)
const meesage = ref(null)
const pop = ref(false)
const animation = ref()
const popmessage = ref()

function copy() {
  navigator.clipboard.writeText('mehdibigi1383@gmail.com')
  alert('ایمیل کپی شد')
}
function checkInputs() {
  if (!name.value) {
    return 0
  }
  if (!email.value) {
    return 0
  }
  if (!meesage.value) {
    return 0
  }
  console.log('ok')
  return 1
}

function clicked() {
  if (checkInputs()) {
    popmessage.value = 'مرسی از همراهی شما'
    this.animation = 'animate-popup'
    this.pop = true
    this.name = ''
    this.email = ''
    this.meesage = ''
  } else {
    popmessage.value = 'لطفا همه ی  اطلاعات را وارد کنید'
    this.animation = 'animate-popup'
    this.pop = true
  }
}
function closePop() {
  this.animation = 'animate-popdown'
  setTimeout(() => {
    this.pop = false
  }, 400)
}
</script>
