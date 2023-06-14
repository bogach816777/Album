import React, { useEffect, useState } from 'react'

const Comments = () => {

 const apiUrl = "https://jsonplaceholder.typicode.com/comments";
 const [comments, setComments] = useState([])
 
useEffect(()=>{
    fetchFunction()
}, [])

 const fetchFunction = async()=>{
    try{
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    setComments(data)
}catch(err){
    console.error("Не працює Api");
}



 }

  return (
    <>
    <div className='container'>
        {comments.map((coment)=> (
            <article className='container-body' key={coment.id}>
                <h2>{coment.name}</h2>
                <p>{coment.email}</p>
                <p>{coment.body}</p>
            </article>
            
        ))}


      
    </div>
    </>
  )
}

export default Comments
