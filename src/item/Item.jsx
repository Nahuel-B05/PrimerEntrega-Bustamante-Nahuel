import "./Item.css";
import Button from "../components/Button";
function Item (){
    return (
        <div className="cardManga">
        <img src="./asset/img/bnha190.jpg" alt="Manga"/>
        <h2>Boku no Hero A.</h2>
        <h3>$9999</h3>
        <Button label="ADD TO CART" 
                color="#fd7014"/>
        <div className="boxInfo-manga">
            <h3>Preventa</h3>
        </div>
        <div className="numero-manga">
            <h3># 30</h3>
        </div>
        </div>
        )}

export default Item