import React, {useEffect, useState} from 'react';
import axios from 'axios';


const baseURL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const Api = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(baseURL);
    //console.log(data)
    setData(data);
  }
    useEffect(() => {
        /* fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => console.log(data)) */
      
        fetchData();
    },[])

  if (!data) return null;

  return (
    <div>Api Data
      {data.map((data, index) => (
        <p key={index}>ID: {data.id}, Title: {data.title}, Body: {data.body}</p>
    ))}
    </div>
  )
}

export default Api