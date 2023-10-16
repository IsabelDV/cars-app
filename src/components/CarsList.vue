<template>
  <div class="my-10">
    <h1 class="font-bold mb-5 text-xl underline underline-offset-4">
      Lista de Coches
    </h1>
    <ul class="space-y-5">
      <li
        v-for="car in cars"
        :key="car.id"
        @click="showCarDetails(car)"
        class="border-2 border-[#3A4E48] rounded-lg font-semibold text-white bg-[#6A7B76] cursor-pointer px-10"
      >
        {{ car.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          name: "BMW M3 GTR E30",
          description: "Un coche deportivo de lujo.",
          img: "/bmw-e30-gtr.jpg",
        },
        {
          id: 2,
          name: "Nissan GTR R35",
          description: "Flipas con el GTR",
          img: "/nissan-gtr.jpeg",
        },
        {
          id: 3,
          name: "Nissan Skyline R34",
          description: "Fast & Furious o que?",
          img: "/nissan-skyline-r34.jpeg",
        },
        {
          id: 4,
          name: "Toyota Supra 1998",
          description: "It's a supra?!?!?!?",
          img: "/supra-1998.jpg",
        },
        {
          id: 5,
          name: "Mustang 1969 Boss 429",
          description: "El coche de John Wick",
          img: "/mustang-69.jpg",
        },
      ],
    };
  },
  methods: {
    showCarDetails(car) {
      this.$emit("show-details", car);
    },
  },
};
</script>
