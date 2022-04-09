/* this is our root component

How do we know that?
Well if we go to index.js inside it if we see we give the App component to ReactDom.render as root component
*/


import React from 'react'

//importing CartItem

import CartItem from './CartItem';

function App() {
  return (
    <div className="App">
        <h1> Cart </h1>
        {/* Here in this root component we will render our cart Item component */}

        {/* Rendering Cart Component*/}
        <CartItem />

        
    </div>
  );
}

export default App;
