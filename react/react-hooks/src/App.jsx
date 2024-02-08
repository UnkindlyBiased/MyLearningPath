import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Button from './components/Button'
import Product from './components/product/Product'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/product?limit=15').then(res => {
      setProducts(res.data.products)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div>
        <Button />
      </div>
      <div>
        {products.map(product => (
          <Product key={product.id} prod={product} />
        ))}
      </div>
    </>
  )
}

export default App
