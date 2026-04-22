import Item from "./Item.jsx";

function Listing({data}) {
    return (
        <div className="item-list">
            {data.map((item, index) => (
                <Item key={index} item={item} />

                ))}
        </div>
    )
}

export default Listing;