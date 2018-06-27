<style>
    #box-chat{
        margin-top:10px;
    }
    .show-message{
        width:100%;
        border:1px solid #ccc;
        height:300px;
        padding:10px;
        box-sizing:border-box;
    }
    #btnChat{
        width:100%;
         
    }
 
    .sms-1{
        
       padding:5px;
       margin:2px 0px;
        box-sizing:border-box;
        border:1px solid #ccc;
        clear:both;
        float:left;
    }
    .username{
        color:red;
        font-weight:bold;
    }
</style>
<template>
    <div class="row" id="box-chat">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <img src="https://hoanguyenit.com/public/img/logo33.png"/>
            <div class="alert alert-success">
                {{title}}
            </div>
            <div class="show-message">
                 
                
            </div>
            <form action="http://localhost:3000/" method="post">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Enter username" id="user"/>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <input type="text" class="form-control" placeholder="Enter message" id="message"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-danger" id="btnChat">Send Message</button>
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
                title:"Form chat Nodejs + Vuejs"
            }
        }
    }
 
</script>
