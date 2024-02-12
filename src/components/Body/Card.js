import React,{useState} from 'react'; 
import { useDispatch } from 'react-redux';

const Card = (props) => {
    
    const { name, tagline, description, imageUrl,situation}=props
    const [star, setStar] = useState(situation);
    const dispatch=useDispatch()

    const truncatedContent = description.length > 150 ? description.substring(0, 80) + '.........' : description

    
  return (
    <div className="card">
      <div className="card-left">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy" 
          width="200" 
        />
      </div>
      <div className="card-right">
        <div className='card_bookmark'><h3>{name}</h3></div>
        <i>{tagline}</i>
        <p>{truncatedContent}</p>
      </div>
    </div>
  );
};

export default Card;
