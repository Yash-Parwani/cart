// importing react so that we can make a class CartItem which will inherit component class from react
import React from 'react'
 
class CartItem extends  React.Component{
    // this is a class based component

    // CartItem will inherit featuers from Component class in React 


    // now for a class component to be a react component we need to give the class component a method called as render

    render(){
        // this method should return some jsx which will define ui of the component

        return (
            <div className='cart-item'>
               <div className='left-block'>
                        <img style={styles.image}/>
               </div>
               <div className='right-block'>
                           <div style={ {fontSize : 25}}>Phone</div>
                           <div style={ {color: '#777'}}> Rs 999</div>
                           <div style={ {color: '#777}'}>Qty : 1</div>

                           <div className='cart-item-actions'>
                               {/* Buttons*/}
                           </div>
               </div>
            </div>
        )
    }
}


//styling elements using object

const styles = {
    image: {
        height : 110,
        width : 110,
        borderRadius : 4
    }
}

export default CartItem