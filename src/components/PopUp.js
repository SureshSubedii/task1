import { AppsSharp, ClearSharp, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../styles/PopUp.css'
import axios from './Axios'
import Contents from './Contents'


function PopUp({onClick}) {
  const [products,setProducts]=useState([])
  const [searchData,setSearchData]=useState('')
  const [selectedValue,setSelectedValue]=useState('')
  const [price,setPrice]=useState();


  useEffect(() => {
    axios.get('/')
    .then(res=>{
        setProducts(res.data);


    })


 
}, [])
  return (
    <div className='popup' onClick={onClick}>
        <div className="search-box">
            <Search/>
            <input onChange={(event)=>setSearchData(event.target.value)} type='text' placeholder='Search'/>
          
           <select defaultValue="" onChange={(event)=>setSelectedValue(event.target.value)}>
            <option value="" disabled>Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>

           </select>
          
           <select defaultValue={null} onChange={(event)=>setPrice(event.target.value)} >
            <option value={null}  >Price</option>
            <option value={20}> less than 20 </option>
            <option value={50}>less than 50</option>
            <option value={100}>less than 100</option>
            <option value={200}>less than 200</option>
            <option value={500}>less than 500</option>
            <option value={1000}>less than 1000</option>
            <option value={2000}>less than 2000</option>
            <option value={5000}>less than 5000</option>
           </select>

            <AppsSharp/>
            <ClearSharp/>
        </div>
        <Contents products={products} searchData={searchData} selectedValue={selectedValue} price={price}/>
        <div className="navigation-buttons">
        <p className='up-arrow-button'>&#8593;</p>
        <p className='down-arrow-button'>&#8595;</p>to navigate
        <p className='select-button'>&#x21A9;</p>to select
        <p className='esc-button'>Esc</p>to close
            
        </div>
    </div>
  )
}

export default PopUp