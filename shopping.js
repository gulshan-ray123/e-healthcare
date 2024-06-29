    
    let qty=1;
    // program for Rash_free medicine data;
    let price_Rashfree=500;
    function increase_new(){
        qty++;
       console.log(qty);
       document.querySelector('#qty').innerText=qty;
       price=price_Rashfree*qty;
      console.log(price);
      document.querySelector('#table').rows[2].cells.item(1).innerText=price;
      price_Rashfree=500;
        }
        function decrease_new(){
            qty--;
            // price=price*qty;
            document.querySelector('#qty').innerText=qty;
            price=price-500;
            // console.log(price);
            document.querySelector('#table').rows[2].cells.item(1).innerText=price;
        }
    let button=document.querySelector("#btn1");
    let button2=document.querySelector("#btn2");
        button.addEventListener('click',Event=>{
            increase_new();
        })
        button2.addEventListener('click',Event=>{
            decrease_new();
        })
    let btn3=document.querySelector('#buy_now');
    let dlt='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
    function val_change(){
        document.querySelector('#dtl').innerHTML='Detail';
        document.querySelector('#rating').innerText='Price after Discount in Rupees'
       let value= document.querySelector('#table').rows[2].cells.item(1).innerHTML;
       let dis= document.querySelector('#table').rows[3].cells.item(1).innerText;
       console.log(value);
    console.log(dis);
       let discount=value-(dis*value)/100;
       console.log(discount);
       document.querySelector('#rat').innerHTML=discount;
       document.querySelector('#table').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
       document.querySelector('#table').rows[3].cells.item(1).innerHTML='40'
       document.querySelector('#table').rows[5].cells.item(0).innerHTML='Expiry Date'
       document.querySelector('#table').rows[5].cells.item(1).innerHTML='July 2026'
       document.querySelector('#table').rows[7].cells.item(0).innerHTML=dlt;
       let final_price= 40+discount;
       document.querySelector('#table').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
       let x= document.createElement('button');
    //    let t= document.createTextNode("Final purchase");
       x.appendChild(purchase_cl);
       document.querySelector('#fnl').appendChild(x).style.height='20px';
       document.querySelector('#fnl').appendChild(x).style.marginTop='10px';
    //    x.append(resetBtn)
       let x1= document.createElement('button');
       //let t1= document.createTextNode("Reset");
       
       
       
       x1.appendChild(resetBtn);
       document.querySelector('#fnl').appendChild(x1).style.height='20px';
    }
    btn3.addEventListener('click',Event=>{
        val_change(); 
    })
    let resetBtn = document.createElement("btn");
    resetBtn.innerHTML = "Reset";
    resetBtn.classList.add("reset");

    let purchase_cl=document.createElement("btn");
    purchase_cl.innerHTML="final purchase";
    purchase_cl.classList.add("purchase")
    purchase_cl.addEventListener('click',Event=>{
      purchase();
    })
    function purchase(){
      document.querySelector("#section1").innerHTML='Item purchased Successfully'
      document.querySelector('#section1').style.fontSize="20px";
    }
    
    let table = document.querySelector("#table").innerHTML

    resetBtn.addEventListener('click',()=>{
        console.log("hi");
        resetValue();
    })


    function resetValue(){
       document.querySelector('#table').innerHTML=''
        document.querySelector('#table').innerHTML=table;
        //console.log("hello")
       let btn4=document.querySelector('#buy_now')
       btn4.addEventListener('click',Event=>{
        val_change();
       })
       document.querySelector('#qty').innerHTML=qty;
       let btn7=document.querySelector('#btn1')
       btn7.addEventListener('click',Event=>{
        increase_new();
       })
       let btn_7b=document.querySelector('#btn2');
       btn_7b.addEventListener('click',Event=>{
            decrease_new();
       })
    }
   
     //program for Sirona rashfree cream
    let button3=document.querySelector("#btn3");
    let button4=document.querySelector("#btn4");
    let qty_sirona=1;
   let price_sir
    let price_Sirona=390;
    function increase_new_sirona(){
        qty_sirona++;
       console.log(qty_sirona);
       document.querySelector('#qty2').innerText=qty_sirona;
       price_sir=price_Sirona*qty_sirona;
      console.log(price_sir);
      document.querySelector('#table1').rows[2].cells.item(1).innerText=price_sir;
      price_Sirona=390;
        }
    button3.addEventListener('click',Event=>{
        increase_new_sirona();
    })
    function decrease_new_sirona(){
        qty_sirona--;
        // price=price*qty;
        document.querySelector('#qty2').innerText=qty_sirona;
        price_sir=price_sir-390;
        // console.log(price);
        document.querySelector('#table1').rows[2].cells.item(1).innerText=price_sir;
    }
    let btn_4a=document.querySelector("#btn4");
    btn_4a.addEventListener('click',Event=>{
        decrease_new_sirona();
    })
    let btn4=document.querySelector('#buy_now2');
    let dlt2='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
    function val_change_sirona(){
        document.querySelector('#dtl2').innerHTML='Detail';
        document.querySelector('#rating2').innerText='Price after Discount in Rupees'
       let value= document.querySelector('#table1').rows[2].cells.item(1).innerHTML;
       let dis= document.querySelector('#table1').rows[3].cells.item(1).innerText;
       console.log(value);
    console.log(dis);
       let discount=value-(dis*value)/100;
       console.log(discount);
       document.querySelector('#rat2').innerHTML=discount;
       document.querySelector('#table1').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
       document.querySelector('#table1').rows[3].cells.item(1).innerHTML='40'
       document.querySelector('#table1').rows[5].cells.item(0).innerHTML='Expiry Date'
       document.querySelector('#table1').rows[5].cells.item(1).innerHTML='July 2026'
       document.querySelector('#table1').rows[7].cells.item(0).innerHTML=dlt;
       let final_price= 40+discount;
       document.querySelector('#table1').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
       let x= document.createElement('button');
    //    let t= document.createTextNode("Final purchase");
       x.appendChild(purchase_cl);
       document.querySelector('#fnl1').appendChild(x).style.height='20px';
       document.querySelector('#fnl1').appendChild(x).style.marginTop='10px';
    //    x.append(resetBtn)
       let x1= document.createElement('button');
       //let t1= document.createTextNode("Reset");
       
       
       
       x1.appendChild(resetBtn);
       document.querySelector('#fnl1').appendChild(x1).style.height='20px';
    }
    btn4.addEventListener('click',Event=>{
        val_change_sirona();
    })
    // let resetBtn = document.createElement("btn");
    // resetBtn.innerHTML = "Reset";
    // resetBtn.classList.add("reset");
    
    
    let table2 = document.querySelector("#table1").innerHTML

    resetBtn.addEventListener('click',()=>{
        console.log("hi");
        resetValue_sirona();
        document.querySelector('#qty2').innerText=qty_sirona;
    })
    function resetValue_sirona(){
        document.querySelector('#table1').innerHTML=''
         document.querySelector('#table1').innerHTML=table2;
         //console.log("hello")
        let btn6=document.querySelector('#buy_now2')
        btn6.addEventListener('click',Event=>{
         val_change_sirona();
        })
        document.querySelector('#qty2').innerText=qty_sirona;
       let btn8=document.querySelector('#btn3')
       btn8.addEventListener('click',Event=>{
        increase_new_sirona();
       })
       let btn8_a=document.querySelector('#btn4');
       btn8_a.addEventListener('click',Event=>{
        decrease_new_sirona();
       })
     }
         
   
    // program for Himalya_creme medicine data;
    let price_Himalya=85;
    let qty_himalya=1;
    let price_him;
    function increase_new_himalya(){
        qty_himalya++;
       console.log(qty);
       document.querySelector('#qty4').innerText=qty_himalya;
       price_him=price_Himalya*qty_himalya;
      console.log(price_him);
      document.querySelector('#table3').rows[2].cells.item(1).innerText=price_him;
      price_Himalya=85;
        }
        function decrease_new_himalya(){
            qty_himalya--;
            // price=price*qty;
            document.querySelector('#qty4').innerText=qty_himalya;
            price_him=price_him-85;
            // console.log(price);
            document.querySelector('#table3').rows[2].cells.item(1).innerText=price_him;
        }
    let button3_b=document.querySelector("#btn7");
    let button4_b=document.querySelector("#btn8");
        button3_b.addEventListener('click',Event=>{
            increase_new_himalya();
        })
        button4_b.addEventListener('click',Event=>{
            decrease_new_himalya();
        })
    let btn3_b=document.querySelector('#buy_now4');
    let dlt4='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
    function val_change_himalya(){
        document.querySelector('#dtl4').innerHTML='Detail';
        document.querySelector('#rating4').innerText='Price after Discount in Rupees'
       let value= document.querySelector('#table3').rows[2].cells.item(1).innerHTML;
       let dis= document.querySelector('#table3').rows[3].cells.item(1).innerText;
       console.log(value);
    console.log(dis);
       let discount=value-(dis*value)/100;
       console.log(discount);
       document.querySelector('#rat4').innerHTML=discount;
       document.querySelector('#table3').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
       document.querySelector('#table3').rows[3].cells.item(1).innerHTML='40'
       document.querySelector('#table3').rows[5].cells.item(0).innerHTML='Expiry Date'
       document.querySelector('#table3').rows[5].cells.item(1).innerHTML='July 2026'
       document.querySelector('#table3').rows[7].cells.item(0).innerHTML=dlt4;
       let final_price= 40+discount;
       document.querySelector('#table3').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
       let x= document.createElement('button');
    //    let t= document.createTextNode("Final purchase");
       x.appendChild(purchase_cl);
       document.querySelector('#fnl3').appendChild(x).style.height='20px';
       document.querySelector('#fnl3').appendChild(x).style.marginTop='10px';
       x.append(resetBtn)
       let x1= document.createElement('button');
       //let t1= document.createTextNode("Reset");
       
       
       
       x1.appendChild(resetBtn);
       document.querySelector('#fnl3').appendChild(x1).style.height='20px';
    }
    btn3_b.addEventListener('click',Event=>{
        val_change_himalya();
        
    })
    let table5 = document.querySelector("#table3").innerHTML

    resetBtn.addEventListener('click',()=>{
        console.log("hi");
        resetValue_himalya();
    })


    function resetValue_himalya(){
       document.querySelector('#table3').innerHTML=''
        document.querySelector('#table3').innerHTML=table5;
        //console.log("hello")
       let btn9=document.querySelector('#buy_now4');
       btn9.addEventListener('click',Event=>{
        val_change_himalya();
       })
       document.querySelector('#qty4').innerHTML=qty_himalya;
       let btn10=document.querySelector('#btn7')
       btn10.addEventListener('click',Event=>{
        increase_new_himalya();
       })
       let btn_7c=document.querySelector('#btn8');
       btn_7c.addEventListener('click',Event=>{
            decrease_new_himalya();
       })
    }
    // program for Adult care rashfree cream

    let button3_a=document.querySelector("#btn5");
    let button4_a=document.querySelector("#btn6");
    let qty_adultcare=1;
   let price_adl;
    let price_adultcare=5299;
    function increase_new_adultcare(){
        qty_adultcare++;
       console.log(qty_adultcare);
       document.querySelector('#qty3').innerText=qty_adultcare;
       price_adl=price_adultcare*qty_adultcare;
      console.log(price_adl);
      document.querySelector('#table2').rows[2].cells.item(1).innerText=price_adl;
      price_adultcare=5299;
        }
    button3_a.addEventListener('click',Event=>{
        increase_new_adultcare();
    })
    function decrease_new_adultcare(){
        qty_adultcare--;
        // price=price*qty;
        document.querySelector('#qty3').innerText=qty_adultcare;
        price_adl=price_adl-5299;
        // console.log(price);
        document.querySelector('#table2').rows[2].cells.item(1).innerText=price_adl;
    }
    // let btn_4a=document.querySelector("#btn4");
    button4_a.addEventListener('click',Event=>{
        decrease_new_adultcare();
    })
    
    let dlt3='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
    function val_change_adultcare(){
        document.querySelector('#dtl3').innerHTML='Detail';
        document.querySelector('#rating3').innerText='Price after Discount in Rupees';
       let value= document.querySelector('#table2').rows[2].cells.item(1).innerHTML;
       let dis= document.querySelector('#table2').rows[3].cells.item(1).innerHTML;
       console.log(value);
    console.log(dis);
       let discount=value-(dis*value)/100;
       console.log(discount);
       document.querySelector('#rat3').innerHTML=discount;
       document.querySelector('#table2').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
       document.querySelector('#table2').rows[3].cells.item(1).innerHTML='40'
       document.querySelector('#table2').rows[5].cells.item(0).innerHTML='Expiry Date'
       document.querySelector('#table2').rows[5].cells.item(1).innerHTML='July 2026'
       document.querySelector('#table2').rows[7].cells.item(0).innerHTML=dlt3;
       let final_price= 40+discount;
       document.querySelector('#table2').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
       let x= document.createElement('button');
    //    let t= document.createTextNode("Final purchase");
       x.appendChild(purchase_cl);
       document.querySelector('#fnl2').appendChild(x).style.height='20px';
       document.querySelector('#fnl2').appendChild(x).style.marginTop='10px';
       x.append(resetBtn)
       let x1= document.createElement('button');
       //let t1= document.createTextNode("Reset");
       
       
       
       x1.appendChild(resetBtn);
       document.querySelector('#fnl2').appendChild(x1).style.height='20px';
    }
    let btn_4c=document.querySelector('#buy_now3');
    btn_4c.addEventListener('click',Event=>{
        val_change_adultcare();
    })
    // let resetBtn = document.createElement("btn");
    // resetBtn.innerHTML = "Reset";
    // resetBtn.classList.add("reset");


    
    let table3 = document.querySelector("#table2").innerHTML

    resetBtn.addEventListener('click',()=>{
        console.log("hi");
        resetValue_adultcare();
    })
    function resetValue_adultcare(){
        document.querySelector('#table2').innerHTML=''
         document.querySelector('#table2').innerHTML=table3;
         //console.log("hello")
        let btn6=document.querySelector('#buy_now3')
        btn6.addEventListener('click',Event=>{
         val_change_adultcare();

        })
        document.querySelector('#qty2').innerHTML=qty_adultcare;
       let btn8=document.querySelector('#btn5')
       btn8.addEventListener('click',Event=>{
        increase_new_adultcare();
       })
       let btn8_a=document.querySelector('#btn6');
       btn8_a.addEventListener('click',Event=>{
        decrease_new_adultcare();
       })
     }
     //program for rashfree Zinc oxide
     let button3_c=document.querySelector("#btn9");
     let button4_c=document.querySelector("#btn10");
     let qty_zincoxide=1;
    let price_zno;
     let price_zincoxide=149;
     function increase_new_zincoxide(){
         qty_zincoxide++;
        console.log(qty_zincoxide);
        document.querySelector('#qty5').innerText=qty_zincoxide;
        price_zno=price_zincoxide*qty_zincoxide;
       console.log(price_zno);
       document.querySelector('#table4').rows[2].cells.item(1).innerText=price_zno;
       price_zincoxide=149;
         }
     button3_c.addEventListener('click',Event=>{
         increase_new_zincoxide();
     })
     function decrease_new_zincoxide(){
         qty_zincoxide--;
         // price=price*qty;
         document.querySelector('#qty5').innerText=qty_zincoxide;
         price_zno=price_zno-149;
         // console.log(price);
         document.querySelector('#table4').rows[2].cells.item(1).innerText=price_zno;
     }
     // let btn_4a=document.querySelector("#btn4");
     button4_c.addEventListener('click',Event=>{
         decrease_new_zincoxide();
     })
     
     let dlt5='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
     function val_change_zincoxide(){
         document.querySelector('#dtl5').innerHTML='Detail';
         document.querySelector('#rating5').innerText='Price after Discount in Rupees';
        let value= document.querySelector('#table4').rows[2].cells.item(1).innerHTML;
        let dis= document.querySelector('#table4').rows[3].cells.item(1).innerHTML;
        console.log(value);
     console.log(dis);
        let discount=value-(dis*value)/100;
        console.log(discount);
        document.querySelector('#rat5').innerHTML=discount;
        document.querySelector('#table4').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
        document.querySelector('#table4').rows[3].cells.item(1).innerHTML='40'
        document.querySelector('#table4').rows[5].cells.item(0).innerHTML='Expiry Date'
        document.querySelector('#table4').rows[5].cells.item(1).innerHTML='July 2026'
        document.querySelector('#table4').rows[7].cells.item(0).innerHTML=dlt3;
        let final_price= 40+discount;
        document.querySelector('#table4').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
        let x= document.createElement('button');
        // let t= document.createTextNode("Final purchase");
        x.appendChild(purchase_cl);
        document.querySelector('#fnl4').appendChild(x).style.height='20px';
        document.querySelector('#fnl4').appendChild(x).style.marginTop='10px';
        x.append(resetBtn)
        let x1= document.createElement('button');
        //let t1= document.createTextNode("Reset");
        
        
        
        x1.appendChild(resetBtn);
        document.querySelector('#fnl4').appendChild(x1).style.height='20px';
     }
     let btn_4d=document.querySelector('#buy_now5');
     btn_4d.addEventListener('click',Event=>{
         val_change_zincoxide();
     })
     // let resetBtn = document.createElement("btn");
     // resetBtn.innerHTML = "Reset";
     // resetBtn.classList.add("reset");
 
 
     
     let table6 = document.querySelector("#table4").innerHTML
 
     resetBtn.addEventListener('click',()=>{
         console.log("hi");
         resetValue_zincoxide();
     })
     function resetValue_zincoxide(){
         document.querySelector('#table4').innerHTML=''
          document.querySelector('#table4').innerHTML=table6;
          //console.log("hello")
         let btn6_a=document.querySelector('#buy_now5')
         btn6_a.addEventListener('click',Event=>{
          val_change_zincoxide();
 
         })
         document.querySelector('#qty5').innerHTML=qty_zincoxide;
        let btn8_b=document.querySelector('#btn9')
        btn8_b.addEventListener('click',Event=>{
         increase_new_zincoxide();
        })
        let btn8_c=document.querySelector('#btn10');
        btn8_c.addEventListener('click',Event=>{
         decrease_new_zincoxide();
        })
      }
//program for luxuri.

      let button3_d=document.querySelector("#btn11");
      let button4_d=document.querySelector("#btn12");
      let qty_luxuri=1;
     let price_lux;
      let price_luxuri=410;
      function increase_new_luxuri(){
          qty_luxuri++;
         console.log(qty_luxuri);
         document.querySelector('#qty6').innerText=qty_luxuri;
         price_lux=price_luxuri*qty_luxuri;
        console.log(price_lux);
        document.querySelector('#table5').rows[2].cells.item(1).innerText=price_lux;
        price_luxuri=149;
          }
      button3_d.addEventListener('click',Event=>{
          increase_new_luxuri();
      })
      function decrease_new_luxuri(){
          qty_luxuri--;
          // price=price*qty;
          document.querySelector('#qty6').innerText=qty_luxuri;
          price_lux=price_lux-149;
          // console.log(price);
          document.querySelector('#table5').rows[2].cells.item(1).innerText=price_lux;
      }
      // let btn_4a=document.querySelector("#btn4");
      button4_d.addEventListener('click',Event=>{
          decrease_new_luxuri();
      })
      
      let dlt6='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
      function val_change_luxuri(){
          document.querySelector('#dtl6').innerHTML='Detail';
          document.querySelector('#rating6').innerText='Price after Discount in Rupees';
         let value= document.querySelector('#table5').rows[2].cells.item(1).innerHTML;
         let dis= document.querySelector('#table5').rows[3].cells.item(1).innerHTML;
         console.log(value);
      console.log(dis);
         let discount=value-(dis*value)/100;
         console.log(discount);
         document.querySelector('#rat6').innerHTML=discount;
         document.querySelector('#table5').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
         document.querySelector('#table5').rows[3].cells.item(1).innerHTML='40'
         document.querySelector('#table5').rows[5].cells.item(0).innerHTML='Expiry Date'
         document.querySelector('#table5').rows[5].cells.item(1).innerHTML='July 2026'
         document.querySelector('#table5').rows[7].cells.item(0).innerHTML=dlt6;
         let final_price= 40+discount;
         document.querySelector('#table5').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
         let x= document.createElement('button');
        //  let t= document.createTextNode("Final purchase");
         x.appendChild(purchase_cl);
         document.querySelector('#fnl5').appendChild(x).style.height='20px';
         document.querySelector('#fnl5').appendChild(x).style.marginTop='10px';
         x.append(resetBtn)
         let x1= document.createElement('button');
         //let t1= document.createTextNode("Reset");
         
         
         
         x1.appendChild(resetBtn);
         document.querySelector('#fnl5').appendChild(x1).style.height='20px';
      }
      let btn_5ce=document.querySelector('#buy_now6');
      btn_5ce.addEventListener('click',Event=>{
          val_change_luxuri();
      })
      // let resetBtn = document.createElement("btn");
      // resetBtn.innerHTML = "Reset";
      // resetBtn.classList.add("reset");
  
  
      
      let table7 = document.querySelector("#table5").innerHTML
  
      resetBtn.addEventListener('click',()=>{
          console.log("hi");
          resetValue_luxuri();
      })
      function resetValue_luxuri(){
          document.querySelector('#table5').innerHTML=''
           document.querySelector('#table5').innerHTML=table7;
           //console.log("hello")
          let btn6_ae=document.querySelector('#buy_now6')
          btn6_ae.addEventListener('click',Event=>{
           val_change_luxuri();
          })
          document.querySelector('#qty6').innerHTML=qty_luxuri;
         let btn8_d=document.querySelector('#btn11')
         btn8_d.addEventListener('click',Event=>{
          increase_new_luxuri();
         })
         let btn8_e=document.querySelector('#btn10');
         btn8_e.addEventListener('click',Event=>{
          decrease_new_luxuri();
         })
       }
       //program for kinster
       let button3_e=document.querySelector("#btn13");
       let button4_e=document.querySelector("#btn14");
       let qty_kinster=1;
      let price_kin;
       let price_kinster=1399;
       function increase_new_kinster(){
           qty_kinster++;
          console.log(qty_kinster);
          document.querySelector('#qty7').innerText=qty_kinster;
          price_kin=price_kinster*qty_kinster;
         console.log(price_kin);
         document.querySelector('#table6').rows[2].cells.item(1).innerText=price_kin;
         price_kinster=1399;
           }
       button3_e.addEventListener('click',Event=>{
           increase_new_kinster();
       })
       function decrease_new_kinster(){
           qty_kinster--;
           // price=price*qty;
           document.querySelector('#qty7').innerText=qty_kinster;
           price_kin=price_kin-1399;
           // console.log(price);
           document.querySelector('#table6').rows[2].cells.item(1).innerText=price_kin;
       }
       // let btn_4a=document.querySelector("#btn4");
       button4_e.addEventListener('click',Event=>{
           decrease_new_kinster();
       })
       
       let dlt7='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
       function val_change_kinster(){
           document.querySelector('#dtl7').innerHTML='Detail';
           document.querySelector('#rating7').innerText='Price after Discount in Rupees';
          let value= document.querySelector('#table6').rows[2].cells.item(1).innerHTML;
          let dis= document.querySelector('#table6').rows[3].cells.item(1).innerHTML;
          console.log(value);
       console.log(dis);
          let discount=value-(dis*value)/100;
          console.log(discount);
          document.querySelector('#rat7').innerHTML=discount;
          document.querySelector('#table6').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
          document.querySelector('#table6').rows[3].cells.item(1).innerHTML='40'
          document.querySelector('#table6').rows[5].cells.item(0).innerHTML='Expiry Date'
          document.querySelector('#table6').rows[5].cells.item(1).innerHTML='July 2026'
          document.querySelector('#table6').rows[7].cells.item(0).innerHTML=dlt7;
          let final_price= 40+discount;
          document.querySelector('#table6').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
          let x= document.createElement('button');
        //   let t= document.createTextNode("Final purchase");
          x.appendChild(purchase_cl);
          document.querySelector('#fnl6').appendChild(x).style.height='20px';
          document.querySelector('#fnl6').appendChild(x).style.marginTop='10px';
          x.append(resetBtn)
          let x1= document.createElement('button');
          //let t1= document.createTextNode("Reset");
          
          
          
          x1.appendChild(resetBtn);
          document.querySelector('#fnl6').appendChild(x1).style.height='20px';
       }
       let btn_4f=document.querySelector('#buy_now7');
       btn_4f.addEventListener('click',Event=>{
           val_change_kinster();
       })
       // let resetBtn = document.createElement("btn");
       // resetBtn.innerHTML = "Reset";
       // resetBtn.classList.add("reset");
   
   
       
       let table8 = document.querySelector("#table6").innerHTML;
   
       resetBtn.addEventListener('click',()=>{
           console.log("hi");
           resetValue_kinster();
       })
       function resetValue_kinster(){
           document.querySelector('#table6').innerHTML=''
            document.querySelector('#table6').innerHTML=table8;
            //console.log("hello")
           let btn6_b=document.querySelector('#buy_now7')
           btn6_b.addEventListener('click',Event=>{
            val_change_kinster();
   
           })
           document.querySelector("#qty7").innerHTML=qty_kinster;
          let btn8_d=document.querySelector('#btn13')
          btn8_d.addEventListener('click',Event=>{
           increase_new_kinster();
          })
          let btn8_e=document.querySelector('#btn14');
          btn8_e.addEventListener('click',Event=>{
           decrease_new_kinster();
          })
        }
        //program for B-tex

        let button3_f=document.querySelector("#btn15");
       let button4_f=document.querySelector("#btn16");
    // let btn_10a=document.querySelector("#btn16");
       let qty_btex=1;
      let price_bt;
       let price_btex=30;
       function increase_new_btex(){
           qty_btex++;
          console.log(qty_btex);
          document.querySelector('#qty8').innerText=qty_btex;
          price_bt=price_btex*qty_btex;
         console.log(price_bt);
         document.querySelector('#table7').rows[2].cells.item(1).innerText=price_bt;
         price_kinster=30;
           }
       button3_f.addEventListener('click',Event=>{
           increase_new_btex();
       })
       function decrease_new_btex(){
           qty_btex--;
           // price=price*qty;
           document.querySelector('#qty8').innerText=qty_btex;
           price_bt=price_bt-30;
           // console.log(price);
           document.querySelector('#table7').rows[2].cells.item(1).innerText=price_bt;
       }
       // let btn_4a=document.querySelector("#btn4");
       button4_f.addEventListener('click',Event=>{
           decrease_new_btex();
       })
       
       let dlt8='Rashfree cream is a blend of benzalkonium chloride and Zinc oxide that help to prevent diaper rash by forming a protective barrier between the skin and the diaper. It helps soothe itching and skin irritation'
       function val_change_btex(){
           document.querySelector('#dtl8').innerHTML='Detail';
           document.querySelector('#rating8').innerText='Price after Discount in Rupees';
          let value= document.querySelector('#table7').rows[2].cells.item(1).innerHTML;
          let dis= document.querySelector('#table7').rows[3].cells.item(1).innerHTML;
          console.log(value);
       console.log(dis);
          let discount=value-(dis*value)/100;
          console.log(discount);
          document.querySelector('#rat8').innerHTML=discount;
          document.querySelector('#table7').rows[3].cells.item(0).innerHTML='Delivery Charge in Rs.'
          document.querySelector('#table7').rows[3].cells.item(1).innerHTML='40'
          document.querySelector('#table7').rows[5].cells.item(0).innerHTML='Expiry Date'
          document.querySelector('#table7').rows[5].cells.item(1).innerHTML='July 2026'
          document.querySelector('#table7').rows[7].cells.item(0).innerHTML=dlt7;
          let final_price= 40+discount;
          document.querySelector('#table7').insertRow(8).insertCell(0).innerHTML=`Final Price in Rs.: ${final_price}`;
          let x= document.createElement('button');
        //   let t= document.createTextNode("Final purchase");
          x.appendChild(purchase_cl);
          document.querySelector('#fnl7').appendChild(x).style.height='20px';
          document.querySelector('#fnl7').appendChild(x).style.marginTop='10px';
          x.append(resetBtn)
          let x1= document.createElement('button');
          //let t1= document.createTextNode("Reset");
          
          
          
          x1.appendChild(resetBtn);
          document.querySelector('#fnl7').appendChild(x1).style.height='20px';
       }
       let btn_4g=document.querySelector('#buy_now8');
       btn_4g.addEventListener('click',Event=>{
           val_change_btex();
       })
       // let resetBtn = document.createElement("btn");
       // resetBtn.innerHTML = "Reset";
       // resetBtn.classList.add("reset");
   
   
       
       let table9 = document.querySelector("#table7").innerHTML;
   
       resetBtn.addEventListener('click',()=>{
           console.log("hi");
           resetValue_btex();
       })
       function resetValue_btex(){
           document.querySelector('#table7').innerHTML=''
            document.querySelector('#table7').innerHTML=table9;
            //console.log("hello")
           let btn6_f=document.querySelector('#buy_now8')
           btn6_f.addEventListener('click',Event=>{
            val_change_btex();
   
           })
           document.querySelector('#qty8').innerHTML=qty_btex;
          let btn8_f=document.querySelector('#btn15')
          btn8_f.addEventListener('click',Event=>{
           increase_new_btex();
          })
          let btn8_g=document.querySelector('#btn16');
          btn8_g.addEventListener('click',Event=>{
           decrease_new_btex();
          })
       }
      //program for search bar:::

            function search(){
              let ans=document.querySelector('#Symptom').value;
              console.log(ans);
            // console.log(ans);
            if((ans=="fever")||(ans=="Fever")|| (ans=="FEVER")){
                let sec_fev=document.querySelector("#section4").innerHTML;
              document.querySelector('#section2').innerHTML='';
              document.querySelector('#section2').innerHTML=sec_fev;
              console.log("fever Successful");
            }
              // else{
              //   console.log("fever Failure");
              // }
              else if((ans=="cold")||(ans=="common cold")||(ans=="Cold")||(ans=="Common Cold")||(ans=="COLD")||(ans=="COMMON COLD")){
                let sec_fev1=document.querySelector("#section6").innerHTML;
                document.querySelector('#section2').innerHTML='';
                document.querySelector('#section2').innerHTML=sec_fev1;
                console.log("Cold Successful");
              }
            else if((ans=="Migrane")||(ans=="Headace")||(ans=="MIGRANE")||(ans=="HEADECHE")||(ans=="migrane")||(ans=="headache")){
              let sec_fev2=document.querySelector("#section5").innerHTML;
              document.querySelector('#section2').innerHTML='';
              document.querySelector('#section2').innerHTML=sec_fev2;
              console.log("Migrane Successful");
            }
            }
            //program for menu bar
     