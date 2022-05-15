import { useQuery } from "react-query";
import { getComment } from "../api/api";
import ReactStars from 'react-stars';
import Comments from './Comments'
import "../styles/App.css";

const App = (): any => {
  const { data, isLoading }  = useQuery(["comments"], getComment)

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
      {
        data.nextPage && <div className="ver_mas">
          <span className="__icon">
            <u>Ver más</u> <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      }
    </div>
  );
}

export default App;
