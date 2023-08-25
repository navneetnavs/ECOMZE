import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>

     <div class="flex flex-row">
      <div class="ml-40 w-3/4">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div class="mr-40 w-1/4 h-1/4  "> 

        <div class="flex flex-col px-8 py-10 ">
          <div class="font-semibold text-2xl border-b pb-8" >Your Cart</div>
          <div class="font-semibold text-2xl border-b pb-8 flex justify-between mt-10 mb-5">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <p class="font-bold">Total Amount: ${totalAmount}</p>
          <br></br>
          <button class="bg-green-500  hover:green-900 text-white font-bold py-2 px-4 rounded-lg">
            CheckOut
          </button>
        </div>

      </div>

</div>
    </div>) : 
    (<div class="h-screen flex flex-col items-center justify-center">
      <h1 class=" text-xl text-red-500">Oops! Your cart is empty!</h1>
      <br></br>
      <Link to={"/"}>
        <button class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
