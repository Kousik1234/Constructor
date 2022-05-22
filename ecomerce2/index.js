var productData=JSON.parse(localStorage.getItem("Products")) || []
display(productData)
function display(productData){
    productData.forEach(function(e,index){
     var box=document.createElement("div");
     var img=document.createElement("img");
     img.setAttribute("src",e.img);
     //create Element part
    var sold=document.createElement("h3")
    sold.innerText="Sold:"+" "+ e.sold;
     var name=document.createElement("h3");
     name.innerText="Product_Name:"+" "+ e.productname;
     var gen=document.createElement("h3")
     gen.innerText="Gender:"+" "+ e.gender;
     var price=document.createElement("h3");
     price.innerText="Price:"+" "+ e.price;
     var cate=document.createElement("h3")
     cate.innerText="Category:"+" "+e.catergory;
     var btn_sold=document.createElement("button")
     btn_sold.innerText="sold"
     if(e.sold=="true"){
       sold.style.backgroundColor="red";
     }
     else if(e.sold=="false"){
       sold.style.backgroundColor="green";
     }
     btn_sold.addEventListener("click",soldfunction)
     // sold function 
     function soldfunction(){
         if(e.sold=="true"){
             sold.innerText="false";
             sold.style.backgroundColor="green"
         }else if(e.sold="false"){
             sold.innerText="true";
             sold.style.backgroundColor="red";
         }
     }
     var btn_delete=document.createElement("button")
     btn_delete.innerText="Delete";
      
     btn_delete.addEventListener("click",function(){
         deleteFunction(e,index)
     })
    //append
     box.append(name,cate,img,gen,price,sold,btn_sold,btn_delete);
     document.querySelector("#container").append(box)
   })
   //delete Button fucntion 
   function deleteFunction(e,index,array){
       window.location.reload()
       productData.splice(index,1);
       localStorage.setItem("Products",JSON.stringify(productData))
       var update=localStorage.getItem("Products")
       display(update)
   }
}
