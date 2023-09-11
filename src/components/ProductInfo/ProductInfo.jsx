import TextWithLineBreaks from '../TextWithLineBreaks/TextWithLineBreaks'
import Price from '../Price/Price'

function ProductInfo ({ name, price, priceCurrency, stock }) {
  return (
    <>
      <h1
        className='text-3xl font-bold card-title'
      ><TextWithLineBreaks>{name}</TextWithLineBreaks>
      </h1>
      <div>
        Precio exclusivo:
        <div className='ml-2 tooltip tooltip-right' data-tip='Transferencia, depósito o efectivo'>
          <button className='badge badge-sm align-super text-bold'>i</button>
        </div>
        <Price
          className='text-xl text-info ' price={price} currency={priceCurrency}
        />
      </div>
      <p>Stock disponible: {stock}</p>
      <div className='gap-2 p-4 badge badge-xl badge-success'>
        Envío gratuito a domicilio
      </div>
    </>
  )
}

export default ProductInfo