import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../mocks/asyncMock'
import { useParams } from 'react-router-dom'

// Componentes
import ItemList from '../ItemList/ItemList'

function ItemListContainer ({ ...props }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  // const { categoryId } = getProducts // TEMP

  useEffect(() => {
    setLoading(true)
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div
      className='flex flex-col items-center w-full gap-4'
    >
      {props.children}
      {
        loading
          ? <p>Cargando...</p>
          : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer