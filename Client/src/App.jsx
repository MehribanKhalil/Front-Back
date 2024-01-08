import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [products, setProducs] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState(null)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")


  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/")
    const data = res.data
    setProducs(data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/${id}`)
    getProducts()
  }

  const updateProduct = async (id, data) => {
    const res = await axios.put(`http://localhost:8000/${id}`, data)
    console.log(res);
    getProducts()
  }

  const getProductById = async (id) => {
    const res = await axios.get(`http://localhost:8000/${id}`)
    const data = res.data
    setPrice(data.price)
    setTitle(data.title)
    setId(data._id)
    setIsOpen(true)
    console.log(data);
  }

  useEffect(() => {
    getProducts()
    getProductById()
  }, [])

  return (
    <>
      <h2>Admin Page</h2>
      <div className='products-container'>

        {
          isOpen && <div className={isOpen ? 'open' : 'modal'}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

            <button onClick={() => updateProduct(id, { title: title, price: price })}>save</button>
            <button onClick={() => setIsOpen(false)}>close</button>


          </div>
        }
        {
          products && products.map((product) => (
            <div key={product.id} className='products'>
              <p> product title: {product.title}</p>
              <p> product price: {product.price}</p>
              <div className='actions'>
                <button onClick={() => deleteProduct(product._id)}>delete</button>
                <button onClick={() => getProductById(product._id)}>update</button>

              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
