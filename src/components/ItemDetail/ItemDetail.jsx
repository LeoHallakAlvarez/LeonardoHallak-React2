// Components
import ProductTags from '../ProductTags/ProductTags'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductImage from '../ProductImage/ProductImage'
import ItemCount from '../ItemCount/ItemCount'
import ProductDescription from '../ProductDescription/ProductDescription'
import ProductSpecs from '../ProductSpecs/ProductSpecs'

function ItemDetail ({ ...props }) {
  const {
    id, name, category, brand,
    stock, price, priceCurrency,
    images, banner, description, features
  } = { ...props }

  return (
    <article className='container flex flex-col gap-6'>
      <header className='flex flex-row-reverse justify-between gap-6'>
        <div className='flex flex-col gap-4 text-xl basis-2/5 '>
          <ProductTags {...{ brand, category }} />
          <ProductInfo {...{ name, price, priceCurrency, stock }} />
          <div className='flex flex-col items-center w-full pt-10'>
            {/* TODO: Agregar al carrito */}
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(count) => console.log('Cantidad agregada ', count)}
            />
          </div>
        </div>

        <ProductImage id={id} src={images[0]} alt={name} className='basis-3/5' />
        {/* TODO: Carousel */}
      </header>
      <main className='flex flex-col items-center gap-10 card bg-base-100'>
        {
          banner && banner.length > 0 &&
            <ProductImage id={id} src={banner} alt={`Banner del producto ${name}`} />
        }
        <ProductDescription {...{ name, description }} />
        {features && <ProductSpecs features={features} />}
      </main>
    </article>
  )
}

export default ItemDetail