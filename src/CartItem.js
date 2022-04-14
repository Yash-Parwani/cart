// importing react so that we can make a class CartItem which will inherit component class from react
import React from 'react'
 
class CartItem extends  React.Component{
   


    // now for a class component to be a react component we need to give the class component a method called as render
    increaseQuantity = () =>{
        //  setState form 1
        //  this.setState({
        //      // this.state.qty gives current qty
        //      qty : this.state.qty +1
        //  });
        
        //setState form 2
        // form 2 of setState is used when we want previous state, we will use  the second form

         this.setState((prevState)=>{
           return {
               // prevState.qty gives the previous value of qty
               qty: prevState.qty +1
           }
         },()=>{
            console.log("This state", this.state);
         });

         
        
    }
 
    // decreaseQuantity will also be an arrow function since we want to avoid binding issues in react

    decreaseQuantity= () => {
         const {qty} = this.state;
        

         if(qty === 0){
            return;
        }
       

        this.setState((prevState)=>{
            return {
                qty : prevState.qty - 1
            }
        })
    }
    render(){
        // using object destructuring to avoid repeatedly using this.state
    
        const {price,title,qty} = this.props.product;
        // this method should return some jsx which will define ui of the component
    
        return (
            <div className='cart-item'>
               <div className='left-block'>
                        <img style={styles.image}/>
               </div>
               <div className='right-block'>
                   {/*  using the state of the component that we had defined*/}
                          {/* <div style={ {fontSize : 25}}>{this.state.title}</div>*/}
                          <div style={ {fontSize : 25}}>{title}</div>
                           {/*<div style={ {color: '#777'}}> {this.state.price} </div>*/}
                           <div style={ {color: '#777'}}> {price} </div>
                           {/*<div style={ {color: '#777}'}}>this.state.qty</div> */}
                           <div style={ {color: '#777}'}}>{qty}</div>

                           <div className='cart-item-actions'>
                               {/* Buttons*/}

                               <img alt='increase' className='action-icons' onClick={this.increaseQuantity} src="https://www.flaticon.com/free-icon/add_992651" />
                               <img alt='decrease' className='action-icons'  onClick = {this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                               <img alt='delete' className='action-icons' src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1649525836~hmac=0b6e3262936331a55b72e839a2040366" />
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