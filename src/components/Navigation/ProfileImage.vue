<template>
  <img :src="imageLink" class="h-10 w-10 rounded-3xl object-contain" alt="User Profile Image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://steamuserimages-a.akamaihd.net/ugc/1180454549810299887/798A1691DB495447D0F5817611B9A8AD3143D18B/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    }
  }
}
</script>
