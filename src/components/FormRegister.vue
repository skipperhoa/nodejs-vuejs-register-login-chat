<template>
    <div class="row" id="form-register">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <form action="" method="post" v-on:submit.prevent="register">
                <div class="panel panel-primary">
                    <div class="panel-heading">{{title}}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Firts Name</label>
                            <input type="text" v-model="formdata.first_name" placeholder="First Name" class="form-control" name="first_name" id="first_name"/>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" v-model="formdata.last_name" placeholder="Last Name" class="form-control" name="last_name" id="last_name"/>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" v-model="formdata.email" placeholder="Enter Email" class="form-control" name="email" id="email"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" v-model="formdata.password" placeholder="Enter Password" class="form-control" name="password" id="password"/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-danger">Register</button>
                            <button type="reset" class="btn btn-success">Reset</button>
                            <label class="label label-success">{{message}}</label>
                            <router-link :to="{name:'Boxchat'}">Chat</router-link>
                        </div>
                         
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-2"></div>
    </div>
</template>
<style>
    #form-register{
        margin-top:30px;
    }
</style>
<script>
    export default{
        data(){
            return{
                title:"Form Register",
                formdata:{},
                message:"",
                success:0,
            }
        },
        methods:{
           register(){
                this.axios.post("http://localhost:8888/form-register",this.formdata).then((response) => {
                       console.log(response);
                       if(response.data.success>0){
                           this.message="You register success";
                           this.success=response.data.success;
                       }
                       else{
                           this.message="Register to failed";
                           this.success=response.data.success;
                       }
                  });
                    
            },
 
        }
    }
 
</script>
