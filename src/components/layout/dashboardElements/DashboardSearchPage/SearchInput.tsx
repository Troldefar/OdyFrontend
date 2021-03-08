import { useState } from 'react'

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const searchInput = (e: any): any => {
    e.preventDefault();
    console.log(search);
  }
  return (
    <div className="search-input">
      <div className="search">
          <input 
            type="text" 
            className="searchTerm" 
            placeholder="What are you looking for?"
            onKeyUp={searchInput} 
            onChange={(e:any) => setSearch(e.target.value)} 
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}
