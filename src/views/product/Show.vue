<template>
    <section class="text-gray-700 body-font overflow-hidden bg-white" v-if="data">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    :src="data.thumbnail">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <p>{{ data.category }}</p>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ data.title }}</h1>
                    <p class="leading-relaxed">{{ data.description }}.</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    </div>
                    <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">${{ data.price }}</span>
                        <button
                            class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Beli</button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="!data" class="flex justify-center items-center h-screen">
        <h1 class="text-7xl font-bold">Loading Data</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: null
        }
    },
    async created() {
        const url = this.$route.path;
        const segments = url.split("/");
        const id = segments[2];
        this.idItem = parseInt(id);

        try {
            const response = await axios.get(`https://dummyjson.com/products/${this.idItem}`)
            this.data = response.data;
        } catch {

        }
    }
}
</script>