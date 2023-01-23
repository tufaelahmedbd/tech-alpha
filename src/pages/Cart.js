const Cart = () => {
  return (
    <div>
      <div className="cart-section container mx-auto py-10">
        <h2 className="section-title uppercase text-2xl font-bold space-font  text-center mb-10">
          Your cart
        </h2>
      </div>
      <div className="cart-container">
        <div className="col-product">Product</div>
        <div className="col-unit-price">Unit Price</div>
        <div className="col-quantity">Quantity</div>
        <div className="col-total-price">Total Price</div>
      </div>
      <div className="cart-lower"></div>
    </div>
  );
};

export default Cart;
