var productData=JSON.parse(localStorage.getItem("Products")) || [];
//fun data 
function data(productName,productCatergory,productImg,productPrice,productGender,productSold){
  this.catergory=productCatergory;
  this.img=productImg;
  this.price=productPrice;
  this.productname=productName;
  this.gender=productGender;
  this.sold=productSold;
}

document.querySelector("#form").addEventListener("submit",submitBtn)
function submitBtn(){
event.preventDefault();
//form data
document.querySelector("#form")
var img=form.image.value;
var name=form.name.value;
var category=form.category.value;
var price=form.price.value;
var gender=form.gender.value;

var sold=form.sold.value;
//new data
var store=new data(name,category,img,price,gender,sold)
//pushing data in an array
productData.push(store);
//store in localStorage
localStorage.setItem("Products",JSON.stringify(productData));
}