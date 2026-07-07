import BasketCard from "../components/BasketCard.jsx";
import { useCart } from "../context/CartContext.jsx"
import BasketSidebar from "../components/BasketSidebar.jsx";
import styles from "../pages/Checkout.module.css"
function Checkout() {
  const [state, dispatch] = useCart();
  const clickHandler = (typeOrAction, payload) => {
    if (typeof typeOrAction === "object" && typeOrAction !== null) {
      dispatch(typeOrAction);
    } else {
      dispatch({ type: typeOrAction, payload });
    }
  };
  if (!state.itemsCounter){
    return(
        <div className={styles.container}>
      <p>Your basket is empty.</p>
    </div>
    )
  
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product)=>

       <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
        
        )}
      </div>
    </div>
  )
}

export default Checkout