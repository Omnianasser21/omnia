var name=document.querySelector('#input1');
var email=document.querySelector('#input2');
var pass=document.querySelector('#input3');
var email1=document.querySelector('#input4');
var pass1=document.querySelector('#input5');
var button1 =document.querySelector('#button1');
var button2 =document.querySelector('#button2');
var yes= document.querySelector('.vaild');
var no= document.querySelector('.isvaild');
var ok= document.querySelector('.ok');



var logList = [];

function signUp() {
    var user = {
        name: input1.value,
        email: input2.value,
        pass: input3.value,
    
    };
    console.log(user);
    

  
    var isDuplicate = false;
    for (var i = 0; i < logList.length; i++) {
        if (logList[i].email === user.email || logList[i].name === user.name) {
            isDuplicate = true;
        }
    }

    if (isDuplicate) {
       ok.classList.remove('d-none')
        yes.classList.add('d-none')

    } else {
        ok.classList.add('d-none')
        logList.push(user); 
        console.log(logList);
        
        localStorage.setItem('user', JSON.stringify(logList));
      
        
    }
    clear()

}



function SignUP1(){
        if(input1.value.length == 0 | input2.value.length == 0 |  input3.value.length == 0  ){
        yes.classList.add('d-none')
        no.classList.remove('d-none')
    }else{
        yes.classList.remove('d-none')
        no.classList.add('d-none')
        signUp()
    }
}

function SignIN() {
    var value = localStorage.getItem("user");
    if (value) { 
        var users = JSON.parse(value); 
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === input4.value && users[i].pass === input5.value) {
            
        
                location.href = 'index2.html'; 
            } else{
                alert('something is wrong')
            }
        }
      

}

clear1()
}






function clear1(){
    input4.value=null
    input5.value=null
 }
  
 function clear(){
    input1.value=null
    input2.value=null
    input3.value=null

    
 }






    


