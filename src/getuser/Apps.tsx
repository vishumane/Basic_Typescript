import React,{useState,useEffect} from 'react';
import {User} from'./Interface';
import axios,{AxiosResponse} from 'axios'; 

const Apps=()=> {
    const[userData,setUserData]=useState<User[]>([]);

    useEffect(() => {
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res:AxiosResponse)=>{
        console.log("response",res.data);
        setUserData(res.data);
      })
    }, [])
    console.log(userData);
    return (
        <div>
            {
                userData.map((item,i) =>
                <div key={i}>{ item.name}</div>
                )
            }
        </div>
    )
}
export default Apps;
