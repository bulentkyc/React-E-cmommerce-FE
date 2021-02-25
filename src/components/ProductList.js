import './ProductList.css'

export default function (props) {

    let items = props.data.map(item => {
    return (
        <li className = "list">
            <img 
                src = {item.imgSrc}
            />

            <div>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
            </div>

            <div>
                <button>+</button>
                <h3>{item.amount}</h3>
                <button>-</button>
            </div>

            <h3>{item.price}</h3>
        </li>
    )
    }
    );

    return (
    <ul>
        {items}
    </ul>
    );
}