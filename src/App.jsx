import './App.css'
import data from "./assets/data/etsy.json";
import Listing from "./components/Listing.jsx";

function App() {
  return (
      <div className="container">
        <Listing data={data} />
      </div>
  )
}

export default App
