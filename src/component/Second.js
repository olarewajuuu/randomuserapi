import React,{useEffect, useState} from 'react'
import './Second.css'

const Second = ()=> {

  const [user,setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData =()=>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=10')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        let userdata = data.results
        setUser(userdata)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      fetchData();
  },[])


  return (
    
    <div>
    {isLoading ? 
        <div className='text'>
            <span className="load">Loading...</span>
       
        </div>

       : 
      
    <div className='container'>
       
        {user.map(data => (
          
                <div className='card'>

                    <div className="" key={data.id.value}>
            
                        <img src={data.picture.large} alt="" />
                        <h1>{data.name.first +" " +data.name.last}</h1>
                        <p><i class="fa-solid fa-location-dot"></i> {data.location.city +", " +data.location.state}</p>
                        <p><i className="fa fa-phone"></i> {data.phone}</p>
                        <h6><i className="fa-solid fa-envelope"></i> {data.email}</h6>

                    </div>
                </div>
        ))}
        
            <button className='btn ' onClick={fetchData} disabled={isLoading}>More User</button> 
         
          
       </div>
        }
    </div>
  );
}

export default Second;