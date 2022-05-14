import { useQuery } from "react-query";
import { get_Comment } from "../api/api";
import ReactStars from 'react-stars';
import Comments from './Comments'
import "../styles/App.css";

const App = (): any => {
  const { data, isLoading }  = useQuery(["comments"], get_Comment) 

  if(isLoading){
    return <div>"Loading..."</div>
  }

  return (
    <div className="container">
      <div className='container_resumen'>
        <span>
          <i className="fa-regular fa-comment"></i> ¿QUÉ DICEN LOS DEMÁS DE ESTE PRODUCTO?
        </span>
        <div className='container_rate_resumen'>
          <div className='__rate'>{data.averageRate}</div>
          <div className='__star'>
            <ReactStars
              count={5}
              size={40}
              value={data.averageRate}
              color2={'#5eb3df'}
            />
          </div>
        </div>
        <div className='container_total'>
          <span>Basado en <u>{data.count} opiniones</u></span>
        </div>
      </div>
      <Comments
        comment={data.items}
      />
    </div>
  );
}

export default App;
