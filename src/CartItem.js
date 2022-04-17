// importing react so that we can make a class CartItem which will inherit component class from react
import React from 'react'

const CartItem = (props) => {



    
    

        console.log("The properties insidee props are : ", props);
        // using object destructuring to avoid repeatedly using this.state / this.props

        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props



        const { price, title, qty, img } = props.product;
        // this method should return some jsx which will define ui of the component

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={img}/>
                </div>
                <div className='right-block'>
                    {/*  using the state of the component that we had defined*/}
                    {/* <div style={ {fontSize : 25}}>{this.state.title}</div>*/}
                    <div style={{ fontSize: 25 }}>{title}</div>
                    {/*<div style={ {color: '#777'}}> {this.state.price} </div>*/}
                    <div style={{ color: '#777' }}> {price} </div>
                    {/*<div style={ {color: '#777}'}}>this.state.qty</div> */}
                    <div style={{ color: '#777}' }}>{qty}</div>

                    <div className='cart-item-actions'>
                        {/* Buttons*/}

                        <img alt='increase' className='action-icons'
                            onClick={() => onIncreaseQuantity(product)}
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt='decrease' className='action-icons'
                            onClick={() => onDecreaseQuantity(product)}
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt='delete' className='action-icons'
                            onClick={() => onDeleteProduct(product.id)}
                            src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1650214042~hmac=779e87422b557f062e106f52bccd6e74" />
                    </div>
                </div>
            </div>
        )
   
}


//styling elements using object

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem