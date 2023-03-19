import { useSelector } from "react-redux";
import { currencyFormatter } from "../Utilities/currencyFormatter";

const Cart = () => {
  const { cartItems: data } = useSelector((state) => state.cart);
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font  text-center mb-10">
        Your cart
      </h2>
      <div className="cart-container">
        <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">Total Price</div>
        </div>
        <div className="products flex flex-col">
          {data?.map((product) => (
            <div className="product grid grid-cols-5 gap-10 border-b mt-10 pb-5">
              <div className="left flex col-span-2 gap-5">
                <img
                  className="h-32 w-32 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="details flex flex-col gap-3 items-center">
                  <span>{product.name}</span>
                  <button>Remove</button>
                </div>
              </div>
              <div className="unit-price">
                {currencyFormatter(product.price)}
              </div>
              <div className="counter flex">
                <button className=" h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
                  -
                </button>
                <span className=" h-10 w-10 bg-gray-100 border border-gray-300 flex items-center justify-center">
                  10
                </span>
                <button className=" h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
                  +
                </button>
              </div>
              <div className="total-price ml-auto">
                {currencyFormatter(product.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-r-rose-200 duration-300">
          Clear cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="text-sky-500">Subtotal</span>
            <span className="text-rose-500">$200</span>
          </div>
          <p className=" text-gray-400">
            Taxes and shopping costs are calculated at the checkout
          </p>
          <button className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">
            Checkout
          </button>
          <button className="continue uppercase text-sky-500 font-medium">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
