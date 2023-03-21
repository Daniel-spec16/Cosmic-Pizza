import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN GALAXY</h1>
      <p className={styles.desc}>
        We dedicate all our pride and passion into making the most delicious
        pizza in the galaxy possible. Only premium grade planetary ingredients used,
        no artificial meteoritic flavors is favoured at our restaurant.
        That is what we believe in, cosmic pizza authentic taste is our top concern!
      
      </p>
      
      <div className={styles.wrapper}>
          {pizzaList.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza}/>
          ))}
          
      </div>
    </div>
  );
};

export default PizzaList;