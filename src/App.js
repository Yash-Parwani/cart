/* this is our root component

How do we know that?
Well if we go to index.js inside it if we see we give the App component to ReactDom.render as root component
*/


import React from 'react'

//importing Cart

import Cart from './Cart.js'


import Navbar from './Navbar.js';


function App() {
  return (
    <div className="App">
       
        {/* Here in this root component we will render our cart component */}
        <Navbar />
        {/* Rendering Cart Component*/}
        <Cart/>

        
    </div>
  );
}

export default App;
