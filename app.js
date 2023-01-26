import {getProducts, getCashiers, getCategories, getSubCategories, sendSale} from "./apiCalls.js";
import { isPhoneNumberValid } from "./utils.js";  

const loading=document.getElementById("loading-div");
const display=document.getElementById("form-display");
document.addEventListener("DOMContentLoaded", function() {display.style.display="none";
loading.style.display="block";
setCashiers();
setProducts();
setCategories();
setSubCategories();
changeSubCategories();
setPrice();
setTimeout(function(){ loading.style.display="none"; display.style.display="block"; }, 3000);

} );

const submitButton=document.getElementById("submit-button");
submitButton.addEventListener("click", submitSale);


  

  async function setCashiers(){
 const cashiers = await getCashiers();  
 console.log("I work!");
//  this constant gets the value of the promise
const select=document.getElementById("cashiers");
cashiers.forEach(cashier => {
    const option = document.createElement("option");
    option.value = cashier.id;
    option.innerHTML = cashier.name;
    select.appendChild(option);
});
};

const prices={};

async function setProducts(){
  const products=await getProducts();
  const select=document.getElementById("products");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.innerHTML = product.name;
    prices[product.id]=product.price;
    select.appendChild(option);
  });
};

async function setCategories(){
  const categories=await getCategories();
  const select1=document.getElementById("categories");
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.id;
    option.innerHTML = category.name;
    select1.appendChild(option);
    });
  };

  async function setSubCategories(){
    const subCategories=await getSubCategories();
    const select2=document.getElementById("sub-categories");
    subCategories.forEach(subCategory => {
      const option = document.createElement("option");
      option.value = subCategory.id_category;
      option.innerHTML = subCategory.name;
      select2.appendChild(option);
    });
  };

  function changeSubCategories(){
    const selectCategories=document.getElementById("categories");
    const selectSubCategories=document.getElementById("sub-categories");
    selectCategories.addEventListener("change", function myFunc(){
   for (let child of selectSubCategories.children) {
    if(child.value==selectCategories.options[selectCategories.selectedIndex].value){
      child.style.display="block";
    }else{
      child.style.display="none";
    }
  };
  });
  };
 
  function setPrice(){
    const selectProducts=document.getElementById("products");
    const price=document.getElementById("price");
    selectProducts.addEventListener("change", function myFunc(){
      if (selectProducts.options[selectProducts.selectedIndex].value=="placeholder") price.value="";
      else price.value=prices[selectProducts.options[selectProducts.selectedIndex].value];
    });
  }
 
  function submitSale(){
  const selectCashiers=document.getElementById("cashiers");
  const selectProducts=document.getElementById("products");
  const selectCategories=document.getElementById("categories");
  const selectSubCategories=document.getElementById("sub-categories");
  const price=document.getElementById("price");
  const phoneNumber=document.getElementById("phone-number");
  const customerName=document.getElementById("customer-name");
  const sale={};
 
  if (selectCashiers.options[selectCashiers.selectedIndex]!=selectCashiers.options[0]) sale.cashier=selectCashiers.options[selectCashiers.selectedIndex].value;
  else {alert("Please select a cashier");return  }
 if (selectProducts.options[selectProducts.selectedIndex]!=selectProducts.options[0]) sale.product=selectProducts.options[selectProducts.selectedIndex].value;
  else {alert("Please select a product");return  }
if (selectCategories.options[selectCategories.selectedIndex]!=selectCategories.options[0]) sale.category=selectCategories.options[selectCategories.selectedIndex].value;
  else {alert("Please select a category");return  }
if (selectSubCategories.options[selectSubCategories.selectedIndex]!=selectSubCategories.options[0]) sale.subCategory=selectSubCategories.options[selectSubCategories.selectedIndex].value;
  else {alert("Please select a sub-category");return  }
  if (price.value!="") sale.price=price.value;
  else {alert("Please enter a price"); return }
  if (customerName.value!="") sale.customerName=customerName.value;
  else {alert("Please enter a customer name"); }
  if (isPhoneNumberValid(phoneNumber.value)) sale.phoneNumber=phoneNumber.value;
  else {alert("Invalid phone number"); return}
  
   sendSale(sale);
   alert("Sale sent successfully");


  };
 

