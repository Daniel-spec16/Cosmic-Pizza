import React from 'react'
import styles from '../styles/OrderDetail.module.css'
import { useState } from 'react';


const OrderDetail = ({total, createOrder}) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({customer, address, total, method:0});

  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>You will pay $12 after delivery</h1>
          <div className={styles.item}>
            <label>Name Surname</label>
            <input  placeholder="Name Surname" 
                    type='text' 
                    className={styles.input} 
                    onChange={(e)=>setCustomer(e.target.value)}/>

            
          </div>
          <div className={styles.item}>
            <label>Phone Number</label>
            <input  placeholder="+1 999 999 99" 
                    type='text' 
                    className={styles.input} 
                    />

            
          </div>
          <div className={styles.item}>
            <label>Address</label>
            <input  placeholder="Rentaura Meteorite Complex, 19" 
                    type='text' 
                    className={styles.input} 
                    onChange={(e)=>setAddress(e.target.value)}/>

            
          </div>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </div>

    </div>
  )
}

export default OrderDetail