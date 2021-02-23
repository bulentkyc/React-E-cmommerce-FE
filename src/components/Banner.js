import './Banner.css';

export default function (props) {
    return (
        <img 
            className = "banner"
            src = {props.source}
            alt = "Something went wrong! Please try again later."
            title = "How's the scene"
        /> 
    );
}