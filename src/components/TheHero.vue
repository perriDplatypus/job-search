<template>
  <section class="flex flex-col h-screen pt-10 pb-20">
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-span-1"></div>
      <div class="col-start-2 col-span-5"><the-headline /></div>
      <div class="col-start-7 col-span-5 self-center justify-self-center">
        <img
          class="h-80 w-80 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"
        />
      </div>
      <div class="col-start-12 col-span-1"></div>
    </div>
  </section>
</template>

<script>
import TheHeadline from '@/components/TheHeadLine.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline
  }
}
</script>
