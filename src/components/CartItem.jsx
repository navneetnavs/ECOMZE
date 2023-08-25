
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div class="container px-4 py-8 w-3/4">

      <div class="flex flex-row border-y-2 my-4">

        <div class="border rounded-lg p-4 h-[200px]">
          <img src={item.image} className="w-auto h-full" />
        </div>
        <div class="mx-4">
          <h1 class="text-green-600 font-bold text-xl  ">{item.title}</h1>
          <br></br>
          <h1>{item.description}</h1>
          <br></br>
          <div class="flex flex-row justify-between">
            <p class="text-xl font-bold text-green-600">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
          <br></br>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
