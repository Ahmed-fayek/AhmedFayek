import { Link } from "react-router-dom";
import './Examples.css';
function Examples() {
    return <>
        <div id="work" className="Examples">
            <Link to={'/ecommerce'} target="target_blank"><h2>E-Commerce App</h2></Link>
        </div>
    </>
}
export default Examples;