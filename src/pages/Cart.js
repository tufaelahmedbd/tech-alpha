import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getSubtotal,
  removeFromCart,
} from "../features/products/cartSlice";
import { currencyFormatter } from "../Utilities/currencyFormatter";

const Cart = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    dispatch(getSubtotal());
  }, [data, dispatch]);

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font  text-center mb-10">
        {data.length > 0
          ? `You've added ${data.length} Item${data.length > 1 ? "s" : ""}`
          : "Cart is Empty"}
      </h2>
      <div className="text-center">
        {data.length === 0 && (
          <Link to="/products" className=" text-sky-500 inline-block">
            Start shopping now
          </Link>
        )}
      </div>

      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
              <div className="col-product col-span-2">Product</div>
              <div className="col-unit-price">Unit Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Total Price</div>
            </div>
            <div className="products flex flex-col">
              {data?.map((product) => (
                <div
                  key={product.id}
                  className="product grid grid-cols-5 gap-10 border-b mt-10 pb-5"
                >
                  <div className="left flex col-span-2 gap-5">
                    <img
                      className="h-32 w-32 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="details flex flex-col gap-3 items-center">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className=" uppercase text-gray-400 self-start hover:text-rose-500 duration-300 "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter flex">
                    <button
                      onClick={() => handleDecrease(product)}
                      className=" h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className=" h-10 w-10 bg-gray-100 border border-gray-300 flex items-center justify-center">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className=" h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-r-rose-200 duration-300"
            >
              Clear cart
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between w-full text-2xl font-medium">
                <span className="text-sky-500">Subtotal</span>
                <span className="text-rose-500">
                  {currencyFormatter(subtotal)}
                </span>
              </div>
              <p className=" text-gray-400">
                Taxes and shopping costs are calculated at the checkout
              </p>
              <Link
                to="/"
                className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300 text-center"
              >
                Checkout
              </Link>
              <Link
                to="/products"
                className="continue uppercase text-sky-500 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
