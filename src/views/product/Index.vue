<template>
    <div v-if="!data" class="flex justify-center items-center h-screen">
        <h1 class="text-7xl font-bold">Loading Data</h1>
    </div>
    <div class="flex justify-center items-center w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10" v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            <div v-for="item in data" :key="item.id"
                class="mx-auto w-full sm:w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <router-link :to="'/product/' + item.id + '/' + item.title">
                    <img class="h-48 w-full object-cover object-center" :src="item.thumbnail" alt="Product Image" />
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{{ item.title }}</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{{ item.description }}</p>
                        <div class="flex items-center">
                            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${{ item.price }}</p>
                            <p class="ml-auto text-base font-medium text-green-500">{{ item.discountPercentage }}% off</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: null,
        };
    },
    async created() {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            this.data = response.data.products;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>
  