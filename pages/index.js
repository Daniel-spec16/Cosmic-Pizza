import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import AddButton from "../components/AddButton";
import { useState } from "react";
import Add from "../components/Add";

export default function Home({pizzaList, admin}) {

  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Octara Pizza</title>
        <meta name="description" content="Best pizza restaurant in the galaxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  );
}

export const getServerSideProps = async (ctx)=> {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

if (myCookie.token === process.env.TOKEN) {
  admin = true;
}

  const res = await axios.get('https://cosmic-pizza-5rra5eo69-daniel-spec16.vercel.app/api/products');
  
  return (
    {
      props: {
        pizzaList: res.data,
        admin
      }
    }
  )
}
