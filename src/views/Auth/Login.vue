<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="loginHandler">
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                        <input type="text" autofocus required v-model="username"
                            class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input type="password" required v-model="password"
                            class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    async created() {
        if (Cookies.get('token')) {
            this.$router.push('/dashboard')
        }
    },
    methods: {
        async loginHandler() {
            const bodyData = {
                username: this.username,
                password: this.password
            };

            try {
                const loginResponse = await axios.post("https://dummyjson.com/auth/login", bodyData, {
                    headers: { 'Content-Type': 'application/json' }
                });
                // mendapatkan token
                const token = loginResponse.data.token;
                // token akan di simpan di cookie dengan name token
                Cookies.set('token', token)

                this.$router.push('/dashboard')
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
