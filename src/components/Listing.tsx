import Item from './Item'

export interface ListingItem {
  listing_id: number
  title: string
  url: string
  price: string
  currency_code: string
  quantity: number
  MainImage?: { url_570xN: string }
}

function Listing({ data }: { data: ListingItem[] }) {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  )
}

export default Listing
