import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { search } from '../../../../redux/search';

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const runSearch = (e: any): any => {
    e.preventDefault();
    if(searchInput === '') {
      return;
    }
    dispatch(search(searchInput));
  }
  useEffect(() => {
    return () => {
      dispatch(search(''));
    }
  }, []);
  return (
    <div className="search-input">
      <div className="search">
        <input 
          type="text" 
          className="searchTerm"
          onKeyUp={runSearch} 
          onChange={(e:any) => setSearchInput(e.target.value)} 
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}
