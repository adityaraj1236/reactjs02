import React from 'react'
import ProductForm from './ProductForm'

const NewProduct = (props) => {


  function saveProductDisplay(product){
    console.log("I am inside new product")
    console.log(product)


    //calling parent function
    props.displayProduct(product)
  }
  return (
    <div className="">
    <ProductForm onsaveProductDisplay={saveProductDisplay}/></div>
  )
}

export default NewProduct