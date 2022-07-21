import { Link } from "react-router-dom";

import useFetch from "../fetchHook/UseFetch";

export default function Users() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data?.map((item) => (
        <Link key={item.id} to={`/single-user/${item.id}`}>
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
