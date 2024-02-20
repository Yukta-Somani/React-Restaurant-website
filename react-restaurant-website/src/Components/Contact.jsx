import React, { useState } from 'react';

function Contact() {
    const[email,setEmail]=useState('')
    const [name, setName]=useState('')
    const [textarea, setTextarea]=useState('')

    function changeNameHandler (event){
      setName(event.target.value)
    }
    
    function changeEmailHandler (event){
      setEmail(event.target.value)
    }
    
    function changeTextareaHandler (event){
      setTextarea(event.target.value)
    }
    function submitHandler (event){
      //  event.preventDefault()
      alert(`Your table has been booked with name ${name}`)
    }

    
  return (
    <div id='contact' >
      <h1>BOOK YOUR TABLE</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Full Name' value={name} onChange={changeNameHandler}/>
        <input type='email' placeholder='Type Your E-mail' value={email} onChange={changeEmailHandler}/>
        <textarea placeholder='Write Here .....'  value={textarea} onChange={changeTextareaHandler}></textarea>
        <input type='submit' value='BOOK'/>
      </form>
    </div>
  )
}

export default Contact;
