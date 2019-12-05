import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cartItemsSelector, cartTotalSelector} from "midleware/cart/selectors";
import {CheckoutItem} from "components";
import "./styles.scss";

const mapStateToProps = createStructuredSelector({cartItems: cartItemsSelector, totalValue: cartTotalSelector});

export const CheckoutComponent = ({cartItems, totalValue}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">TOTAL: ${totalValue}</div>
  </div>
);

export const Checkout = connect(mapStateToProps)(CheckoutComponent);
