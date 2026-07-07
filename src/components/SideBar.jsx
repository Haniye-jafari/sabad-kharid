import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";
import styles from "./SideBar.module.css"
import { categories } from "../constants/List"

function SideBar({query, setQuery}) {
    
    const CategoriesHandler = (event) => {
const {tagName} = event.target;
const category = event.target.innerText.toLowerCase().trim();
 if(tagName !== "LI") return;
setQuery(query => createQueryObject (query, {category}));
  }
  return (
    <div className={styles.Sidebar}>
         <div>
        
          <FaListUl/>
          <p>Categories</p>
          </div>
          <ul onClick={CategoriesHandler}>
            {categories.map((item) => (<li key={item.id} className={item.type.toLowerCase() === query.categories ? styles.selected : null}>{item.type}</li>))}
          </ul>
      </div>
    
  )
}

export default SideBar;