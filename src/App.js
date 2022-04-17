/* this is our root component

How do we know that?
Well if we go to index.js inside it if we see we give the App component to ReactDom.render as root component
*/


import React from 'react'

//importing Cart

import Cart from './Cart.js'


import Navbar from './Navbar.js';


class App extends React.Component {
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
                img : 'https://www.mockupworld.co/wp-content/uploads/dynamic/2022/03/free-samsung-galaxy-s22-ultra-mockup-psd-870x0-c-default.jpg',
                id : 1
            },
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1548666006-a8296ec63c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3Nob2NrJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
                id: 2
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
                id : 3
            }
        ]
        }
    }

    handleIncreaseQuantity = (product)=>{
        console.log("Hey please increase the qty of this product : ", product );

        // getting products array from state
        const { products } = this.state;

        // finding index of product inside products so that we can change property of that particular product only

        const index = products.indexOf(product)

        // once we get the index go to that index and change the property/ qty

        products[index].qty +=1;

        // now we have succesfully change qty of the sent product

        /* now we want to notify in the set state as well
           So what we will do is pass the above products array in which we made change to the products property in the state of cart component


           since we made change to the products array we need to notify the state as well since we need to trigger re render as well
           which will be done using setState

        */
         this.setState({
             products : products
         });
        

    }

    handleDecreaseQuantity = (product)=>{
        console.log("Hey please increase the qty of this product : ", product );

        // getting products array from state
        const { products } = this.state;

        // finding index of product inside products so that we can change property of that particular product only

        const index = products.indexOf(product)

        // once we get the index go to that index and change the property/ qty

        // checking if quantity is 0
        if(products[index].qty === 1){
            this.handleDeleteProduct(products[index].id);
            // after deleting when qty is 0 we should return
            return;
        }

        products[index].qty -=1;

        // now we have succesfully change qty of the sent product

        /* now we want to notify in the set state as well
           So what we will do is pass the above products array in which we made change to the products property in the state of cart component


           since we made change to the products array we need to notify the state as well since we need to trigger re render as well
           which will be done using setState

        */
         this.setState({
             products : products
         });
        

    }

      // here we will get the product id since we want to know which product we have to delete from the products array
      /* because product.id is the only unique key we are having to identify a particular product
         agar hum sirf product lete toh waise toh kai products ho sakte hai like we can have multiple watches , laptops , etc
         but to differentiate between them , we would need a unique key which is product.id

      */
    handleDeleteProduct = (id) => {
       // getting the products array from this.state

       const { products } = this.state


       // filtering the particular product to return an array which does not consist of element with the above id
       const items = products.filter((item)=> item.id !== id);


       // setting the updated products by setState.  
    this.setState({
        products : items
    });
    }
    getCartCount = () =>{
      // getting products from this.state so that we can loop over it
      

       const{products} = this.state;

       let count =0;

       products.forEach((product) =>{
         count += product.qty
       })

       return count;
    }


  getCartTotal = () =>{
    // getting the products from state using destructuring
      
    const{products} = this.state;

    let cartTotal = 0;

    /*
    Now there are three ways to loop over products

    way 1 = using for loop like we did for count

    way 2 = using map() 

    way 3 = using reduce()

    reduce functions is used when we want to reduce an array into a single value


    here we will be using way 2

    Note : in map() function we dont do += i.e i+=1 wont work , we will have to do i = i+1


    */
   products.map((product)=>{
     cartTotal = cartTotal + (product.qty *  product.price);
   }
   );
   return cartTotal
  }

  // now for a class component to be a react component we need to give the class component a method called as render
  render (){
    // getting products from state to pass to cart.js
    const { products } = this.state
  return (
    <div className="App">
       
        {/* Here in this root component we will render our cart component */}
        <Navbar count ={this.getCartCount()}/>
        {/* Rendering Cart Component and passing props*/}
        <Cart 
                products = {products}
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}/>

        <div style={{fontSize : 20 , padding : 10}}>
          Total = Rs {this.getCartTotal()}
        </div>
    </div>
  );
  }
}

export default App;
