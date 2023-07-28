import React, { useEffect, useState } from 'react';

const Comments = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchFunction();
  }, []);

  const fetchFunction = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setComments(data);
    } catch (err) {
      console.error("Не працює Api");
    }
  };

  const handleSearch = (event)=>{
    setSearch(event.target.value);
  }
  const searchComments = comments.filter((comment)=>
  comment.name.toLowerCase().includes(search.toLowerCase())
  || comment.email.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='main'>
    <input type="text" className='input' onChange={handleSearch} value={search} placeholder='Search by the name and email' />
      <div className='container'>
        {searchComments.map((comment) => (
          <article className='container-body' key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Comments;