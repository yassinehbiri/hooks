import { Button, Card } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { useState } from "react";
const CardMovie=({el,movies,setMovies})=>{
  const [showMore, setShowMore] = useState(false);
  const handleDelete=(a)=>{
    setMovies(movies.filter((el,i,t)=>el.id != a ))
  }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width :"280px" , height:"400px"}} variant="top" src={el.posterURL}/>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {/* {el.description} */}
            {showMore ? el.description : el.description.substring(0,30)}
            <button className={showMore ? "btnLess" : "btnMore"} onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          <br/><br/>
         <Button variant='danger' onClick={()=>handleDelete(el.id)}>Delete Movie</Button>
        </Card.Body>
      </Card>
    )
}

export default CardMovie