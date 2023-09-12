import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovie=({setSearch,setRate,search,rate,setValidRate})=>{
    const handleReset=()=>{
        setSearch('')
        setRate(0)
        setValidRate(false)
    }
    return(
        <div>
            < input value={search} type="text" onChange={(e)=> setSearch(e.target.value)}/>
            <Rating value={rate} onChange={(e)=>{setRate(e.target.value);setValidRate(true)}}/>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovie