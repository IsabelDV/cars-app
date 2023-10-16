<template>
  <div v-if="selectedCar" class="my-10">
    <h2 class="font-bold mb-5 text-xl underline underline-offset-4">
      Detalles del coche
    </h2>
    <div class="space-y-5">
      <h3 class="font-extrabold">{{ selectedCar.name }}</h3>
      <p class="font-semibold">{{ selectedCar.description }}</p>
      <div class="relative flex justify-center">
        <div class="rounded-xl shadow-lg overflow-hidden w-[530px] h-[290px]">
          <img :src="selectedCar.img" alt="Imagen del coche" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedCar: Object,
  },
};
</script>
