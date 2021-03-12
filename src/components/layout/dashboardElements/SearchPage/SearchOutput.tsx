import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { clear } from '../../../../redux/search';

import SearchProfileCard from './SearchProfileCard';

export default function SearchOutput() {
  const [users, setUsers] = useState<any>([]);
  const search: any = useSelector<any>((state) => state.search);
  const dispatch = useDispatch();
  const searchInput = async(): Promise<any> => {
    try {
      await fetch(`http://127.0.0.1:8000/api/search/search?query=${search.search}`)
        .then(response => response.json())
        .then(json => {
          setUsers(json);
        })
        .catch((error: any) => console.log(error));
    } catch (e) {
      throw new Error(e.message);
    }
  }
  useEffect(() => {
    if(search !== '') {
      searchInput()
    }
  }, [search])
  return (
    <div className="search-output">
      {
        users.map((user: any) => (
          <SearchProfileCard user={user} key={user.name + Math.random()} />
        ))
      }
    </div>
  )
}
