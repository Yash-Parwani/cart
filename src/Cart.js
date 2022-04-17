import React from 'react'

import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className='Cart'>
            {/* iterating over products using map() and rendering cartiems accordingly along with passing keys
               
               when ever we return anything from map() and if its a component we should also give it an attribute called key for helping react to differentiate*/}
            {products.map((product) => {
                // here product is the each element inside products arrray
                //    we will return a CartItem component with required props in it using attributes.
                // the value of attributes are enclosed inside curly braces because at the end they are js codes and for js code we know that they have to be executed inside the curly braces only



                return <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}

                />

                //Be careful as to what we return inside props
                //over here we return product which contains a list of properites and not products which contain a list of products as props to CartItem
            })}


        </div>
    );





}

export default Cart