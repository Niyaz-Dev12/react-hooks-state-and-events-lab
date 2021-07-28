import React,{useState} from "react";

function Item({ name, category }) {
let [cart,setCart]= useState("");


function handleCart(){
if(cart===""){
   cart="in-cart";
   setCart(cart);
}
else {
   cart="";
   setCart(cart);
}


}



  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
