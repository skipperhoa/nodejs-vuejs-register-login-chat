<template>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <form action="" method="post" v-on:submit.prevent="login">
                <h2>{{title}}</h2>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Email" v-model="formdata.email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password" v-model="formdata.password"/>
                </div>
                <div class="form-group">
                <button class="btn btn-success">Login </button>
                </div>
            </form>
        </div>
        <div class="col-md-2"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:"Form Login",
                formdata:{}
            }
        },
        methods:{
            login(){
                this.axios.post("http://localhost:8888/form-login",this.formdata).then((response) => {
                        console.log(response.data.success);
                        
                        if(response.data.success>0){
                            this.$router.go(-1);// trở về component home
                        }
                  });
                    
            },
        }
    }

</script>