// let products_button = document.querySelector("#products_button");
// products_button.addEventListener("click",fetchdata());
let productBaseUrl = "https://63c71d064ebaa8028553e6e9.mockapi.io/abhishek";
let total = 60;

window.addEventListener("load", () => {
    fetchdata();
    total = localStorage.getItem("total")||60;

});
var product= JSON.parse(localStorage.getItem("product"))||[];

async function fetchdata(page_number=1,data_limit_perpage=6){
    try {
        let res = await fetch(`${productBaseUrl}?page=${page_number}&limit=${data_limit_perpage}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               }
            })
            if(res.ok){
                
                //let token = await res.json();
               //console.log(res);
                // console.log(res.headers.gets("x-"))
                //console.log(res);
                let out = await res.json();
                //console.log(out);
               
                localStorage.setItem("total",total);
                total = localStorage.getItem("total");
                let total_page_show = Math.ceil(total/data_limit_perpage);
               // console.log(total_page_show);
                document.querySelector(".total").innerHTML = `Total Products: ${total}`;
                
                display(out);
                renderPaginationButtons(total_page_show);
            }
        } catch (error) {
         // alert(error);
        }
};


let main = document.querySelector("#parent-product-div");
// var cartdata = JSON.parse(localStorage.getItem("product")) || [];
function display(data){

    main.innerHTML = "";
   main.innerHTML= data.map((elem,index)=>{
    // cartdata.push(elem)
    // localStorage.setItem("product",cartdata)
        return `
        <div class="child-product-div">
                    <div>
                    <img src=${elem.image}>
                    </div>
                    <div>
                    <div>
                        <p><b>Brands:</b> ${elem.brand}</p>
                        <p><b>Price:</b> ₹ ${elem.price}</p>
                        <p><b>Description:</b> ${elem.desc}</p>
                      </div>
                    <div class="deleteButton">
                        <button class="delete" data-id=${elem.id}>Delete</button>
                        <button class="edit" data-id=${elem.id}>Edit</button>
                    </div>
                  </div>
              </div>
        `
    }).join(" ");
   

    let deleteButton = document.querySelectorAll(".delete");
    deleteButton.addEventListener("click",(event)=>{
    
      
            let data_id = event.target.dataset.id;
            deleteItem(data_id);
            
        });
    }; 

/*  <p><b>Id:</b> ${elem.id}</p>*/

async function deleteItem(id){
    try {
        let res = await fetch(`${productBaseUrl}/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type":"application/json",
            },
        });
      
       
        if(res.ok){
            --total;
            fetchdata();
            alert("Product has been deleted succussfully");
         
        }
    
    } catch (error) {
      alert(error);
    }
};



let Addform = document.querySelector("#addform form");
Addform.addEventListener("submit",(event)=>{
    event.preventDefault();
    all_input = document.querySelectorAll("#addform input");
    on_more_section = document.querySelector("#addform select");
    // console.log(all_input);
    // console.log(on_more_section);
    let obj={};
    for(let i=0;i<all_input.length-1;i++){
      obj[all_input[i].id] = all_input[i].value;
    }
    obj.type = on_more_section.value;
    //console.log(obj);
    add_request(obj);
});

async function add_request(obj){
    try {
        let res = await fetch(productBaseUrl,{
            method : "POST",
            headers : {
                "Content-Type":"application/json",
            },
            body : JSON.stringify(obj),
        });
        if(res.ok){
           ++total;
            fetchdata();
            alert("New Product has been added successfully");
        }
    } catch (error) {
      alert(error);
    }
};


// for pagination-wrapper
let paginationWrapper = document.querySelector("#pagination-wrapper");
function renderPaginationButtons(total_pages){
   //paginationWrapper.innerHTML ="";
  // console.log(total_pages);
    paginationWrapper.innerHTML = `
        <div class="pagination-btn-list">
             ${CreatePagButton(total_pages).join(" ")}
        </div>
         `;     
     //console.log(paginationWrapper.innerHTML);
      let all_button = document.querySelectorAll(".pagination-btn");
      for(let key of all_button){
            key.addEventListener("click",(event)=>{
               let page_number = event.target.dataset.id;
                //console.log(page_number);
               fetchdata(page_number);
            });
      }
};

 function CreatePagButton(total_page){
        let array = [];
        for(let page=1; page<=total_page; page++){
            array.push(getAsButton(page,"pagination-btn pagi-btn-color",page))
        }
       // console.log(array);
        return array;
         }

function getAsButton(text, clss, dataId){
    return `<button class="${clss}" ${dataId ? `data-id=${dataId}` : ''}> ${text} </button>`
};







