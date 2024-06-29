let sol_fvr1=['Paracetamol', 'Aisprin', 'Acetaminophen','Advil', 'ibuprofin']
let nasal='for Nasal congestion:'+['Phenyl ephrine','Oxymetazoline','Xylometazolene  '];
let Bdy=' For Body Ache/Fever/mose/blockeye: '+['levocitrazine','Paracetamol','Dexamethason(Dexona','Betamethasone'];
let hghcld='For High Dosage: '+['levocitrazine +','montelukast tablet uses','']
let dos_fev='500-1000 mg in gap of 4-6 hrs. max. 4000mg dosage is prefereed in 24 hrs.'
let dos_cld='1 to 2 capsule orally every 6 hours not to exceed 8 capsules daily.'
let sol_fvr2=nasal+Bdy+hghcld;
let sol_fvr3=['Cinnarizine', 'Stugeron', 'Betahistine Tablet'];
let sol_fvr4=['lopamide','Norflox','Tiniba'];
let dos_dria='4 mg after the first loose bowl movement,then 2 mg after each loose bowel movement after the first dose has been taken.'
let dos_dzn='25 to 50 mg taken 1 hrs. before travel. One may take another dose once every 24 hrs. while travelling.'
// console.log(sol[0]);
// console.log(sol.length);
function vrfy(){
    let age=document.querySelector('#age1').value;
    console.log(age);
let fvr=document.querySelector('#fever');
console.log(fvr);
// let fvr2=document.querySelector("#cold");
if((fvr.checked)&&(age>3)){
    var i= document.createElement("a");
    var t= document.createTextNode("video links");
    i.setAttribute("href","www.google.com");
    i.appendChild(t);
    document.querySelector("#lnk").appendChild(i);
    let fvr1=document.querySelector('#fever').value;
    console.log(fvr1);
    if(fvr1=="Fever"){
        document.querySelector('#para1').innerText=sol_fvr1;
        document.querySelector('#para2').innerText=dos_fev;
        document.querySelector('#pt1').innerText='Drink mild warm Geloae water';
        document.querySelector('#pt2').innerText='Betterground Juice';
        document.querySelector('#pt3').innerText='Treate your forehead with cold water bandage';
        document.querySelector('#pt4').innerText='drink plenty amount of water';
    }
    }
    else{
        document.querySelector("#para1").innerText='Age to less';
    }
    let fvr2=document.querySelector('#cold');
console.log(fvr2);
// let fvr2=document.querySelector("#cold");
if((fvr2.checked)&&(age>=3)){
    var i= document.createElement("a");
    var t= document.createTextNode("video links");
    i.setAttribute("href","www.google.com");
    i.appendChild(t);
    document.querySelector("#lnk").appendChild(i);
    let fvr3=document.querySelector('#cold').value;
    console.log(fvr3);
    if(fvr3=="Cold"){
        document.querySelector('#para1').innerText=sol_fvr2;
        document.querySelector('#para2').innerText=dos_cld;
        document.querySelector('#pt1').innerText='use Ginger turmeric tea';
        document.querySelector('#pt2').innerText='Use tulsi Drops and Cinnamon Tea';
        document.querySelector('#pt3').innerText='Drink Turmeric Milk and Mulaithe tea';
        document.querySelector('#pt4').innerText='Use Honey and Warm Water';
    }
    }
    // else{
    //     document.querySelector("#para1").innerText='Age to less';
    // }
    let fvr4=document.querySelector('#diziness');
    console.log(fvr4);
    // let fvr2=document.querySelector("#cold");
    if((fvr4.checked)&&(age>=3)){
        var i= document.createElement("a");
        var t= document.createTextNode("video links");
        i.setAttribute("href","www.google.com");
        i.appendChild(t);
        document.querySelector("#lnk").appendChild(i);
        let fvr5=document.querySelector('#diziness').value;
        console.log(fvr5);
        if(fvr5=="Diziness"){
            document.querySelector('#para1').innerText=sol_fvr3;
            document.querySelector('#para2').innerText=dos_dzn;
            document.querySelector('#pt1').innerText='put 3-4 basil leaves in a cup and boil it.';
            document.querySelector('#pt2').innerText='Inhale the smell of above boiled';
            document.querySelector('#pt3').innerText='Take the tonic before going to bed.';
            document.querySelector('#pt4').innerText='Take Steam at home daily night.';
        }
        }
        // else{
        //     document.querySelector("#para1").innerText='Age to less';
        // }
        let fvr5=document.querySelector('#diarrhiae');
        console.log(fvr5);
        // let fvr2=document.querySelector("#cold");
        if((fvr5.checked)&&(age>=3)){
            var i= document.createElement("a");
            var t= document.createTextNode("video links");
            i.setAttribute("href","www.google.com");
            i.appendChild(t);
            document.querySelector("#lnk").appendChild(i);
            let fvr6=document.querySelector('#diarrhiae').value;
            console.log(fvr6);
            if(fvr6=="Diarrhoea"){
                document.querySelector('#para1').innerText=sol_fvr4;
                document.querySelector('#para2').innerText=dos_dria;
                document.querySelector('#pt1').innerText='for mild cases get plenty of water.';
                document.querySelector('#pt2').innerText='Ginger in food or tea';
                document.querySelector('#pt3').innerText='';
                document.querySelector('#pt4').innerText='';
            }
            }
        //   else if(age=''){
        //     document.querySelector('#para1').innerText='Enter valid age'
        //   }
        // else{
        //     document.querySelector("#para1").innerText='Age to less';
  
        // }
        document.querySelector('#notice').innerText=''
    }
// let fvr1=document.querySelector("#cold").value;
// if((fvr1.checked)&&(age>=3)){
//     var i= document.createElement("a");
//     var t= document.createTextNode("video links");
//     i.setAttribute("href","www.google.com");
//     i.appendChild(t);
//     document.querySelector("#lnk").appendChild(i);
//     let fvr2=document.querySelector('#cold').value
//     if(fvr2=="Cold"){
//         document.querySelector('#para1').innerText=sol_fvr2;
//         document.querySelector('#para2').innerText=dos_cld;
//         document.querySelector('#pt1').innerText='Drink mild warm Geloae water';
//         document.querySelector('#pt2').innerText='Betterground Juice';
//         document.querySelector('#pt3').innerText='Treate your forehead with cold water bandage';
//         document.querySelector('#pt4').innerText='drink plenty amount of water';
//     }
