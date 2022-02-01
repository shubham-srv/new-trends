import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.scss";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <div className="shopping-icon">
        <CartSvg />
      </div>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return { toggleHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
