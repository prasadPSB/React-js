import React, { useState } from 'react';

function App(){
    
    const products = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Headphones", price: 500 },
      { id: 3, name: "Smartphone", price: 30000 },
    ];
    const [cart, setCart] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);
    const addToCart = (product) => {
        let updatedCart = [...cart];
        let productExists = false;
        updatedCart = updatedCart.map((ele) => {
            if (ele.id === product.id) {
                productExists = true;
                return { ...ele, price: ele.price + product.price };
            }
            return ele;
        });
        if (!productExists) {
            updatedCart = [...updatedCart, product];
            console.log(updatedCart)
        }
        setCart(updatedCart);
        let total = 0
        updatedCart.map((element)=>{
            total += element.price;
        })
        setTotalAmt(total)
    }
   
    const removeFromCart = (index) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((_, i) => i !== index);
            let total = 0;
            updatedCart.map((element) => {
                total += element.price;
            });
            setTotalAmt(total);
            return updatedCart;
        });
    };
  
    return(
        <div>
            <h2>Shopping Cart</h2>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - ₹{product.price}
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
            <h3>Cart</h3>
            {cart.map((product, index) => (
                <div key={index}>
                    {product.name} - ₹{product.price}
                    <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
                </div>
            ))}
            <div>Total Amount: ₹{totalAmt}</div>
        </div>
    )
}
export default App;