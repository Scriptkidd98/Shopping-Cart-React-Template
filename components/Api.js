import React, {useEffect, useState} from 'react';
import axios from 'axios';


const baseURL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const Api = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => console.log(data))

        axios.get(baseURL)
        .then((res) => {
          setData(res.data);
        })

        console.log(data)
    },[])

  if (!data) return null;

  return (
    <div>Api
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Api