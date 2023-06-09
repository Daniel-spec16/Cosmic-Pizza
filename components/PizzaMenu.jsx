import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaMenu = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      
      
      <div className={styles.wrapper}>
          {pizzaList.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza}/>
          ))}
          
      </div>
    </div>
  );
};

export default PizzaMenu;