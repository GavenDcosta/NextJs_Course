import React from 'react'

interface User{
  id:number;
  name:string;
}

const  UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache : 'no-store' })  //dynamic rendering, server side renders at run time
//const res = await fetch('https://jsonplaceholder.typicode.com/users', { next : { revalidate : 10 } })   //static rendering
  const users: User[] = await res.json()

  return (    
    <div>
      <h1 className='text-[30px] font-bold text-black mb-10'>UsersPage</h1>
      <p className='text-black mb-5'>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => {
          return(
            <li className='text-black' key={user.id}>{user.name}</li>
          )
        })}
        
      </ul>
    </div>
   
  )
}

export default UsersPage