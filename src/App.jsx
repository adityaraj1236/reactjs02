import React , {useState} from 'react' 
import NewProduct from './components/NewProduct'

const App = () => {



    

  const [title , setTitle] = useState('shampoo')



  function clickHandler() {
    console.log("Button clicked")
    setTitle("Popcorn")
  }

  const [date , setDate] =  useState('12-12-2024')
  


  function checkDateHandler() {
    setDate((Date.now()).toLocaleString())
  }


  function printProductData(data){
    console.log(data)
  }


  return (
    <div className="bg-red-300">{title}
    <span>{date}</span>
    <button onClick={checkDateHandler}>check Date</button>
      <button onClick={clickHandler} className="border-[2px] rounded-xl border-yellow-400">Change UI</button>  

      <NewProduct displayProduct ={printProductData}/>
      </div>
  )
}

export default App