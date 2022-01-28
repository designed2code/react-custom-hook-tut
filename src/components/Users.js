import React, {useState } from 'react';
import { useFetch } from '../custom-hooks/useFetch';
export default function Users() {
    // const [users,setUsers] = useState([])
    const [url,setUrl] = useState(`https://jsonplaceholder.typicode.com/posts`)
    const {data:users} = useFetch(url)

    // const fetchUsers = useCallback(async () => {
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setUsers(json)
    // },[url])

    // useEffect(() => {
    //     fetchUsers()
    // },[fetchUsers])

  return(
      <>
      <button onClick={() => setUrl(`https://jsonplaceholder.typicode.com/todos`)}>Click to get Todos</button>
      <button onClick={() => setUrl(`https://jsonplaceholder.typicode.com/posts`)}>Click to get Posts</button>
      
      {/* NOTE:- If users is undefined then don't map, if we don't write users && then we get an error because initially
      users are set to null in our custom hooks folder */}
      {users && users.map((user,index) => {
          return(
              <li style={{listStyleType:'none'}} key={user.id}>{user.title}</li>
          )
      })}
      </>
  )
}
