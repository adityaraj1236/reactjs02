import {useState} from 'react'

const ProductForm = () => {

    const [newTitle , setTitle] = useState('');
    const [newDate , setDate] = useState('');
    // function titleChangeHandler(event) {
    //     setTitle(event.target.value)
    //     // console.log(event.target.value);
    //     // console.log()
        
    // }
    function dateChangeHandler(event) {
        setDate(event.target.value)
        // console.log(event.target.value);
        
    }



    // const [fullProductInput , setfullProductInput] = useState({
    //     title: '' ,
    //     date: ''
    // })

    // function setfullProductInput(event , prevState) {
       
    // }

    function titleChangeHandler(event, prevState) {
            setTitle(event.target.value)
        //     // console.log(event.target.value);
        //     // console.log()
        // setfullProductInput() return {...prevState , title:event.target.value}
        // let obj = {...prevState , title:event.target.value}
        // console.log(obj);   
        // return obj   ;
        }
        function submitHandler(event){
            event.preventDefault()
            const productData = {
                title:newTitle,
                date:newDate
            }
            console.log(productData)

            setTitle('')
            setDate('')
        }
  return (
    <form onSubmit={submitHandler}>
        <div>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div>
        <label>Date</label>
        <input type='date' min='2024-01-01' max='2024-12-12' value={newDate} onChange={dateChangeHandler}></input>
        </div>

        {/* mainly value krne se link hua useState uss input field */}
        <div>
            <button type='submit'>Add Product</button>
        </div>
    </form>

  )
}

export default ProductForm