multi();
multiple();
async function multi(){
  try{
      
       let res= await fetch("https://63c7ea245c0760f69ac0c93a.mockapi.io/nww")

       let data= await res.json();
       
        
      displaymg(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }

    function displaymg(mg_data){
    
    mg_data.map(function(ele){
    let div1= document.createElement("div");
    let img= document.createElement("img")
    img.setAttribute("src",ele.image);
    img.setAttribute("class","proClass")
    let name_div=document.createElement("div")
    name_div.setAttribute("class","name_div");
    let name=document.createElement("h2");
    name.textContent=ele.desc;
    name_div.append(name)
    name.setAttribute("class","proname");
    let quantity=document.createElement("p");
    quantity.textContent=ele.quantity;
    quantity.setAttribute("class","quantity");
    let rating_div=document.createElement("div");
    rating_div.setAttribute("class","div5")
    let rating=document.createElement("p");
    rating.textContent=`4★`;
    rating.setAttribute("class","rating");
    rating_div.append(rating);
    let mrp=document.createElement("p");
    let span2=document.createElement("span");
    span2.textContent=`MRP ₹${ele.price}`;
    span2.setAttribute("class","mrp");
    let span=document.createElement("span");
    span.innerText=`24 %off` ;
    mrp.append(span2,span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class","dis");
    let price=document.createElement("p");
    price.textContent="₹"+ Math.floor((ele.price)*0.24);
    price.setAttribute("class","price")
    
    
    div1.append(img,quantity,rating_div,name_div,mrp,price);
    
    document.querySelector("#mg").append(div1);
       
    let data_send={
        img:ele.image,
        name:ele.name,
        quantity:ele.quantity,
        rating:ele.rating,
        mrp:ele.mrp,
        discount:ele.discount,
        price:ele.price
        
     }
     div1.onclick=()=>{
         showproduct(data_send)
     }
     });
     }
     
     function showproduct(data){
         localStorage.setItem('mg_base',JSON.stringify(data));
        //  window.location.href="productPage.html"
     }
    
async function multiple(){
  try{
      
       let res= await fetch("https://63c7ea245c0760f69ac0c93a.mockapi.io/trending")

       let data= await res.json();
        
      displaypre(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }
    function displaypre(pre_data){
    
    pre_data.map(function(ele){
        let div1= document.createElement("div");
        let img= document.createElement("img")
        img.setAttribute("src",ele.image);
        img.setAttribute("class","proClass")
        let name_div=document.createElement("div")
        name_div.setAttribute("class","name_div");
        let name=document.createElement("h2");
        name.textContent=ele.desc;
        name_div.append(name)
        name.setAttribute("class","proname");
        let quantity=document.createElement("p");
        quantity.textContent=ele.quantity;
        quantity.setAttribute("class","quantity");
        let rating_div=document.createElement("div");
        rating_div.setAttribute("class","div5")
        let rating=document.createElement("p");
        rating.textContent=`4★`;
        rating.setAttribute("class","rating");
        rating_div.append(rating);
        let mrp=document.createElement("p");
        let span2=document.createElement("span");
        span2.textContent=`MRP ₹${ele.price}`;
        span2.setAttribute("class","mrp");
        let span=document.createElement("span");
        span.innerText=`24 %off` ;
        mrp.append(span2,span);
        // var discount=document.createElement("p");
        // discount.textContent=;
        span.setAttribute("class","dis");
        let price=document.createElement("p");
        price.textContent="₹"+ Math.floor((ele.price)*0.24);
        price.setAttribute("class","price")
        
    
    
    div1.append(img,quantity,rating_div,name_div,mrp,price);
    
    document.querySelector("#sup").append(div1);

     
    let data_send={
       img:ele.image,
       name:ele.name,
       quantity:ele.quantity,
       rating:ele.rating,
       mrp:ele.mrp,
       discount:ele.discount,
       price:ele.price
       
    }
    
    div1.onclick=()=>{
        showproduct(data_send)
    }
    });
    }
    
    function showproduct(data){
        localStorage.setItem('mg_base',JSON.stringify(data));
        // window.location.href="productPage.html"
    }
    
    multi1();
    multiple1();
    async function multi1(){
      try{
          
           let res= await fetch("https://639ac7ce31877e43d675eddd.mockapi.io/biotine")
    
           let data= await res.json();
           
            
          displaymg1(data);
      }
      catch(e){
          console.log("err:",e);
      }
      }
    
        function displaymg1(mg_data){
        
        mg_data.map(function(ele){
        let div1= document.createElement("div");
        let img= document.createElement("img")
        img.setAttribute("src",ele.image);
        img.setAttribute("class","proClass")
        let name_div=document.createElement("div")
        name_div.setAttribute("class","name_div");
        let name=document.createElement("h2");
        name.textContent=ele.desc;
        name_div.append(name)
        name.setAttribute("class","proname");
        let quantity=document.createElement("p");
        quantity.textContent=ele.quantity;
        quantity.setAttribute("class","quantity");
        let rating_div=document.createElement("div");
        rating_div.setAttribute("class","div5")
        let rating=document.createElement("p");
        rating.textContent=`4★`;
        rating.setAttribute("class","rating");
        rating_div.append(rating);
        let mrp=document.createElement("p");
        let span2=document.createElement("span");
        span2.textContent=`MRP ₹${ele.price}`;
        span2.setAttribute("class","mrp");
        let span=document.createElement("span");
        span.innerText=`24 %off` ;
        mrp.append(span2,span);
        // var discount=document.createElement("p");
        // discount.textContent=;
        span.setAttribute("class","dis");
        let price=document.createElement("p");
        price.textContent="₹"+ Math.floor((ele.price)*0.24);
        price.setAttribute("class","price")
        
        
        div1.append(img,quantity,rating_div,name_div,mrp,price);
        
        document.querySelector("#biotine").append(div1);
           
        let data_send={
            img:ele.image,
            name:ele.name,
            quantity:ele.quantity,
            rating:ele.rating,
            mrp:ele.mrp,
            discount:ele.discount,
            price:ele.price
            
         }
         div1.onclick=()=>{
             showproduct(data_send)
         }
         });
         }
         
         function showproduct(data){
             localStorage.setItem('mg_base',JSON.stringify(data));
            //  window.location.href="productPage.html"
         }
        
    async function multiple1(){
      try{
          
           let res= await fetch("https://63c8e84bc3e2021b2d4b9b78.mockapi.io/trending")
    
           let data= await res.json();
            
          displaypre1(data);
      }
      catch(e){
          console.log("err:",e);
      }
      }
        function displaypre1(pre_data){
        
        pre_data.map(function(ele){
            let div1= document.createElement("div");
            let img= document.createElement("img")
            img.setAttribute("src",ele.image);
            img.setAttribute("class","proClass")
            let name_div=document.createElement("div")
            name_div.setAttribute("class","name_div");
            let name=document.createElement("h2");
            name.textContent=ele.desc;
            name_div.append(name)
            name.setAttribute("class","proname");
            let quantity=document.createElement("p");
            quantity.textContent=ele.quantity;
            quantity.setAttribute("class","quantity");
            let rating_div=document.createElement("div");
            rating_div.setAttribute("class","div5")
            let rating=document.createElement("p");
            rating.textContent=`4★`;
            rating.setAttribute("class","rating");
            rating_div.append(rating);
            let mrp=document.createElement("p");
            let span2=document.createElement("span");
            span2.textContent=`MRP ₹${ele.price}`;
            span2.setAttribute("class","mrp");
            let span=document.createElement("span");
            span.innerText=`24 %off` ;
            mrp.append(span2,span);
            // var discount=document.createElement("p");
            // discount.textContent=;
            span.setAttribute("class","dis");
            let price=document.createElement("p");
            price.textContent="₹"+ Math.floor((ele.price)*0.24);
            price.setAttribute("class","price")
            
        
        
        div1.append(img,quantity,rating_div,name_div,mrp,price);
        
        document.querySelector("#brkfast").append(div1);
    
         
        let data_send={
           img:ele.image,
           name:ele.name,
           quantity:ele.quantity,
           rating:ele.rating,
           mrp:ele.mrp,
           discount:ele.discount,
           price:ele.price
           
        }
        
        div1.onclick=()=>{
            showproduct(data_send)
        }
        });
        }
        
        function showproduct(data){
            localStorage.setItem('mg_base',JSON.stringify(data));
            // window.location.href="productPage.html"
        }

        let loginPage=document.getElementById("");
        let loginBtn=document.getElementById("login_button");
        loginBtn.addEventListener("click",()=>{

        })


        var user = JSON.parse(localStorage.getItem("userdata"))||[];
  
  if(user.length==0){
    var log = document.createElement("a")
    log.setAttribute("href","login.html")
    log.setAttribute("class","logandsign")
    log.innerText="Login  | "
    // <a href="login.html" class="logandsign">Login  |</a>
    var sign = document.createElement("a")
    sign.setAttribute("href","signUp.html")
    sign.setAttribute("class","logandsign")
    sign.innerText="Sign Up"
    // var sign = <a href="signUp.html" class="logandsign">Sign Up</a>
    // document.getElementById("user").append(log,sign);                           
  }

  if(user.length!=0)
  {
    var logout = document.createElement("a")
    logout.addEventListener("click",function(){
      localStorage.removeItem("userdata");
      document.location.reload()
    })
    logout.setAttribute("class","logandsign")
    logout.style.marginLeft="10px"
    logout.innerText="LogOUT"

    var e = "";
    for(var i=0;i<6;i++)
    {
      e += user[0].name[i];
    }
    document.querySelector(".login_signup").innerText= "Hi "+e
 
    document.querySelector(".login_signup").append(logout)
  }
