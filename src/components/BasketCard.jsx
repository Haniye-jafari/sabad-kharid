import { MdDeleteOutline } from "react-icons/md"
import { shortenText } from "../helper/helper"
import styles from "./BasketCard.module.css"
function BasketCard({ data, clickHandler}) {
    const {image, title, quantity} = data;
  return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <p>{shortenText(title)}</p>
        <div className={styles.action}>
{quantity === 1 && (
   
    <button onClick={() => clickHandler({"type": "REMOVE_ITEM", "payload": data}) } ><MdDeleteOutline /></button>
)}
{quantity > 1 && <button onClick={() => clickHandler({"type": "DECREASE", "payload": data}) } > - </button>}
<span>{quantity}</span>
<button onClick={() => clickHandler({"type": "INCREASE", "payload": data}) } > + </button>
        </div>
    </div>
  )
}

export default BasketCard