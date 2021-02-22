import logo from '../logo.svg';
import './Card.css';
/* 
let cardContent = {
    header: 'Hello World :))',
    details: 'React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.'
}
 */
export default function (props) {

return (
    <div className = "card">
        <img 
            src = {props.imgSrc}
            alt = "Something went wrong! Please try again later."
            title = "How's the scene"
        />
        <h3>My Product</h3> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio facilis dolores ullam autem ad commodi.
        </p>
        <h4>Price: $200</h4> 

        <h4>Add to Cart</h4> 
    </div>
);
}