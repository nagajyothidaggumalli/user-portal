import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);
    const {
        phone,
        email,
        login: { password },
        name: { first, last },
        dob: { age },
        picture: { large: image },
        location: {
          street: { number, name },
        },
      } = employee;
    async function fetchData(){
        const response = await fetch("https://randomuser.me/api/?");
        const json = await response.json();
        console.log(json);
        setEmployeeData("hi"); 
     }
    useEffect(
        ()=>{
             fetchData();
        },[])
    
    return(
        <h1>Employee details</h1>
    );
}