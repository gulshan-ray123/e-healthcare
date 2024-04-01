document.querySelector('#detail1').style.opacity=1;
function validate(){   
let firstname= document.querySelector('#first').value;
if(firstname.length<=3){
   document.querySelector('#inst1').style.color='Red';
}
else{
    document.querySelector('#inst1').style.color='green';
    document.querySelector('#inst1').innerText='First Name Successful'
}
let last=document.querySelector('#last').value;
if(last.length<3){
    document.querySelector('#inst2').style.color='Red';
}
else{
    document.querySelector('#inst2').style.color='green';
    document.querySelector('#inst2').innerText='Last Name Successful'
}
let phone=document.querySelector('#phone').value;

if(phone.length!=10){
    document.querySelector('#inst3').style.color='Red';
}
    else{
        document.querySelector('#inst3').style.color='green';
        document.querySelector('#inst3').innerText='Phone Successful'
    }
    let email=document.querySelector('#email').value;
    if(email.includes('@gmail.com')){
            document.querySelector('#inst4').style.color='green';
            document.querySelector('#inst4').innerText='Email Successful'
    }
    else{
        document.querySelector('#inst4').style.color='Red';
    }
    document.querySelector('#btn1').innerText='Submit'
    
}
let button=document.querySelector('#btn1');
button.addEventListener('mouseover',Event=>{
  validate();
});
var lrn=document.querySelector('#form2');
lrn.style.display='none';
var display=0;
function learn(){
    if(display==0){
        lrn.style.display='block';
        display=1;
        document.querySelector('#btn1').innerText='Next'
    }
}
