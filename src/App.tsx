import './App.css'
import data from './assets/data/etsy.json'
import Listing, {ListingItem} from './components/Listing'

function App() {
  return (
    <div className="container">
        <Listing data={data as unknown as ListingItem[]} />
    </div>
  )
}

export default App
