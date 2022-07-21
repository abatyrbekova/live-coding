import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "../fetchHook/UseFetch";


export default function SingleUser() {
  const [user, setUser] = useState(null);
  

const { id } = useParams(); // e.g. { id : 2 }
console.log(id)


const [data] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
console.log(data);
  
//  data && setUser(data) will not work! (infinite render)

  useEffect(() => {

    data && setUser(data);

  }, [data]);

  return (
    <div>
      {user && (
        <div>
        <h1>id: {user.id} </h1>
          <h1>username:</h1> <h3> {user.username} </h3>
          <h1>Name:</h1> <h3> {user.name} </h3>
          <h1>Company:</h1> <h3> {user.company.name} </h3>
          <h1>email:</h1> <h3> {user.email} </h3>
          <h1>Phone:</h1> <h3> {user.phone} </h3>
        </div>
      )}
    </div>
  );
}
