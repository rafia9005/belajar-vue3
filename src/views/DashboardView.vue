<template>
    
</template>

<script>
import Cookies from 'js-cookie';
export default{
    async created(){
        if(!Cookies.get('token')){
            this.$router.push('/login')
        }
    }
}
</script>