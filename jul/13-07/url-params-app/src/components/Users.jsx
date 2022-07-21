import React, { useEffect, useState } from "react";
import { 
   // useNavigate,
    Link } from "react-router-dom";

import useFetch from "../UseFetch";

export default function Users() {
  const [users, setUsers] = useState([]);

 // const navigate = useNavigate();

  // const fetchUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // };
 const [data]= useFetch("https://jsonplaceholder.typicode.com/users")

 
  useEffect(() => {
    //fetchUsers();
    data && setUsers(data)
  }, [data]);

  return (
    <div>
      {users.map((item) => (
        <Link key={item.id} to={`/single-user/${item.id}`} >
        <div 
        // onClick={() => navigate(`/single-user/${item.id}`)}
         >
          <h3>id: {item.id} </h3>
          <h3> username: </h3>
          {item.username}
          <h3>Company: </h3>
          {item.company.name}
          <hr />
        </div>
        </Link>
      ))}
    </div>
  );
}
