<template>
  <div id="app">
    <div
      class="grid grid-cols-2 justify-center align-middles bg-[#8B9D83] h-screen"
    >
      <CarsList
        @show-details="showCarDetails"
        class="flex flex-col items-center text-center"
      />
      <CarDetails
        :selectedCar="selectedCar"
        class="flex flex-col items-center text-center"
      />
    </div>
  </div>
</template>

<script>
import CarsList from "./components/CarsList.vue";
import CarDetails from "./components/CarDetails.vue";

export default {
  name: "App",
  components: {
    CarsList,
    CarDetails,
  },
  data() {
    return {
      selectedCar: null,
    };
  },
  methods: {
    showCarDetails(car) {
      this.selectedCar = car;
    },
  },
};
</script>

<style>
#app {
  font-family: Gellix, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
