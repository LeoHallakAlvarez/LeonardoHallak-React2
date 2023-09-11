import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'

// Componentes
import TextWithLineBreaks from '../TextWithLineBreaks/TextWithLineBreaks'
import Price from '../Price/Price'
import ProductPreview from '../ProductPreview/ProductPreview'

function Item ({ ...props }) {
  const { id, name, price, priceCurrency, stock, images } = props
  return (
    <article className='shadow-xl w-72 card bg-base-100'>
      <ProductPreview id={id} images={images} alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>
          <Balancer>
            <TextWithLineBreaks>{name}</TextWithLineBreaks>
          </Balancer>
        </h2>
        <Price price={price} currency={priceCurrency} />
        <p>Stock disponible: {stock}</p>
        <footer className='flex justify-center mt-6 card-actions'>
          <Link
            className='btn btn-primary'
            to={`/${id}`}
          >Ver detalle
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default Item