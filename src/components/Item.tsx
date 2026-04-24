interface Item {
  title: string
  url: string
  price: string
  currency_code: string
  quantity: number
  MainImage?: { url_570xN: string }
}

function Item({ item }: { item: Item }) {
  const formatPrice = (price: string, currency: string): string => {
    const num = parseFloat(price).toFixed(2)
    if (currency === 'USD') return `$${num}`
    if (currency === 'EUR') return `€${num}`
    return `${num} ${currency}`
  }

  const getQuantityLevel = (quantity: number): string => {
    if (quantity <= 10) return 'level-low'
    if (quantity <= 20) return 'level-medium'
    return 'level-high'
  }

  const formatTitle = (title: string): string => {
    if (!title) return ''
    return title.length > 50 ? title.slice(0, 50) + '…' : title
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(item.title)}</p>
        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
        <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default Item
