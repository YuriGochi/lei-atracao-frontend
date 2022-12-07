import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query'

const fetchPeopleListFromAPI = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return res.json();
}

const StarWars: React.FC = () => {
    const { data,status} = useQuery("people", fetchPeopleListFromAPI);
    console.log("data",data);
    console.log("status",status)
    return (
        <>
            <div  style={{display:'flex',width:"100%",marginTop:"50px" ,flexDirection:"column" , justifyContent:'center',alignItems:'center'}}>
             {
                 status==="success" &&
                data.results.map((item: any, index: any)=>
                 <div key={index} style={{boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.05)',padding:'10px',borderRadius:"8px",width:"60%" ,background:"#e6d7ae",marginBottom:"20px"}}>
                     <strong>{item.name}</strong>
                     <p>{item.gender}</p>
                     <p>Hair Color: {item.hair_color}</p>
                     </div>
                )
             }
            </div>
        </>
        )
  };

export default StarWars;