import React from 'react'

import CartItem from './CartItem';

class Cart extends React.Component{
      // this is a class based component

    // CartItem will inherit featuers from Component class in React 


    /*
    Now below lines of code will help to add state to our component

    what is state?

      State is just a way to store local data for that component and state is just a plain js object


      So we can add state by defining a constructor to our class

    */

      constructor(){
        // in js we have to use this when using classes

        /* but before defining or writting any method we need to call base  / super class constructor
                   If we dont do that than it will show same error over there saying we need to call the base class constructor


                   we do it using super()

           */

        super();
        // the below line will help to define state for the given class
        this.state = {
            products : [ {
                price : 999,
                title : 'Phone',
                qty : 1,
                img : '',
                id : 1
            },
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : '',
                id: 2
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 1,
                img : '',
                id : 3
            }
        ]
        }
    }
    render(){
        const { products } = this.state;
        return(
            <div className='Cart'>
               {/* iterating over products using map() and rendering cartiems accordingly along with passing keys
               
               when ever we return anything from map() and if its a component we should also give it an attribute called key for helping react to differentiate*/}
               {products.map((product) =>{
                   // here product is the each element inside products arrray
                //    we will return a CartItem component with required props in it using attributes.
                // the value of attributes are enclosed inside curly braces because at the end they are js codes and for js code we know that they have to be executed inside the curly braces only



                return <CartItem product = {product}  key ={product.id}/>

                //Be careful as to what we return inside props
                //over here we return product which contains a list of properites and not products which contain a list of products as props to CartItem
               })}
               
                
            </div>
        );


    }


}

export default Cart