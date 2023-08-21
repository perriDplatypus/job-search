<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://gfycat.com/adventurousleafygoldeneye'
    }
  }
}
</script>
