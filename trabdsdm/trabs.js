var username;

function logar(){
var pessoa = document.getElementById('barralogin').value;
if (pessoa == null || pessoa == ""){
  alert("Digite seu Username!");

}else{
  username = pessoa;
  document.getElementById("login").style.display="none";
  console.log(username);
  console.log(pessoa);
  document.getElementById("feed").style.display="block";
  document.getElementById("sla").style.display="block";

}



}

function Curtir(){

   if (document.getElementById('curtir').innerHTML == "Curtir")
   {
       document.getElementById('curtir').innerHTML = "Descurtir";
   }
   else
   {
     document.getElementById('curtir').innerHTML = "Curtir";
   }
}



var config = {

el: '#app',

data: {

input:"",

tweets:[



]

},



methods:{

postar: function(){
var user = username;

var data = new Date();


var tweet={

user,



data:data.getDate() + "/" + (data.getMonth() + 1) +"/"+ data.getFullYear() +"  "+data.getHours()+":"+data.getMinutes(),

text:this.input

};

this.tweets.push(tweet);

}
}

};

new Vue(config);
