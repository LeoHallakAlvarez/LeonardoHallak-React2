import Item from '../Item/Item'

function ItemList ({ products }) {
  return (
    <div
      className='flex flex-wrap justify-center gap-6'
    >
      {products.map((product) => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList