import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { clear } from '../../../../redux/search';

export default function SearchOutput() {
  const [users, setUsers] = useState<any>([]);
  const search: any = useSelector<any>((state) => state.search);
  const dispatch = useDispatch();
  const searchInput = async(): Promise<any> => {
    try {
      await fetch(`http://127.0.0.1:8000/api/search/search?query=${search.search}`, {
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(json => {
          setUsers(json);
          console.log("USERS: ", json);
          console.log(users);
        })
        .catch((error: any) => console.log(error));
    } catch (e) {
      throw new Error(e.message);
    }
  }
  useEffect(() => {
    searchInput();
    return () => {
      dispatch(clear());
    }
  }, [search])
  return (
    <div className="search-output">
      {
        users.map((user: any) => (
          <div className="userSearchCard">
            <h1>
              { user.name }
            </h1>
          </div>
        ))
      }
    </div>
  )
}
