<template>
  <lazy-component class="sectionMap">
    <GmapMap
      :center="{lat:50.083333, lng:14.441111}"
      :zoom="16"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </lazy-component>
</template>

<style lang="scss" scoped>
.sectionMap {
  padding: 0;
}
</style>

<script>
export default {
  data() {
    return {
      markers: [
        {
          position: {
            lat: 50.083333,
            lng: 14.441111
          }
        }
      ]
    };
  }
};
</script>

