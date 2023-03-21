import React from 'react'
import PizzaMenu from "../components/PizzaMenu";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import { useState } from "react";

const menu = ({pizzaList, admin}) => {
  return (
    <div>
        
        <PizzaMenu pizzaList={pizzaList}/>

    </div>
  )
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
export default menu;