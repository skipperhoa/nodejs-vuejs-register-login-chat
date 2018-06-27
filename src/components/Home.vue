<template>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <h2>{{title}}</h2>
            <router-link :to="{name:'FormLogin'}">Login</router-link>
            <router-link :to="{name:'FormRegister'}">Register</router-link>
            <router-link :to="{name:'Boxchat'}">Chat</router-link>
        </div>
        <div class="col-md-2"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:"Home"
            }
        }
    }

</script>