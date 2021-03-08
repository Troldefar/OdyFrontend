import { useSelector } from 'react-redux';

export default function SearchOutput() {
  const search: any = useSelector<any>((state) => state.search);
  console.log(search);
  return (
    <div className="search-output">
      
    </div>
  )
}
