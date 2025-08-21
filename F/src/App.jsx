import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/products')
      setProducts(response.data)
    }
    fetchData();
  }, [])
  return (
    <div>
      <h2>Welcome to my Page</h2>
      {products.map((product) => {
        return (
          <div>
            <p>{product.title}</p>
            <img src={product.image} alt="" />

          </div>)
      })}

    </div>
  )
}
export default App
