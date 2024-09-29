import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

function Cart(props: Props) {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack, item) => ack + item.price * item.amount, 0);

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {props.cartItems.length === 0 ? <p>No items in cart</p> : null}
            {props.cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart} 
                />
            ))}
            <h2>
                Total: ${calculateTotal(props.cartItems).toFixed(2)}
            </h2>
        </Wrapper>
    );
}

export default Cart;
