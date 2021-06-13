<template>
  <img
    class="shadow-2xl rounded-lg overflow-hidden"
    :srcset="`
        https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_256/${publicId} 256w,
        https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_512/${publicId} 512w,
        https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_768/${publicId} 768w,
        https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_1024/${publicId} 1024w,
        https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_1280/${publicId} 1280w`"
    :src="`https://res.cloudinary.com/${cloudName}/image/upload/${totalTransformation}w_1024/${publicId}`"
    alt
  />
</template>

<script>
export default {
  props: {
    cloudName: {
      default: "ki"
    },
    defaultTransformation: {
      default: "q_auto:eco,c_fill,g_custom,"
    },
    transformation: {
      default: ""
    },
    publicId: {
      required: true
    },
    alt: {
      required: true
    }
  },
  computed: {
    totalTransformation() {
      return this.transformation !== ""
        ? this.transformation + "," + this.defaultTransformation
        : this.defaultTransformation;
    }
  }
};
</script>
