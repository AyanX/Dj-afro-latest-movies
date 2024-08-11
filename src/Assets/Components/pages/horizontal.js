import "./horizontal.css";
import Data from "../data";
import { useContext } from "react";
import { subscribedContext } from "../../../App";


import vip from "../../Images/asset/user.png";
export default function Horizontal() {
  const{isSubscribed}=useContext(subscribedContext);
  const sectionMovies = Data.filter(function (eachMovie) {
    return eachMovie.over18 === !true && eachMovie.horizontal === false;
  });

  const mapSectionMovies = sectionMovies.map(function (eachMovie) {
    return (
      <div className="section-movie"  key={eachMovie.title}>
        <div className="section-movie-details">
          <div className="section-movie-img">
            <div className="img-container">
            { 
            eachMovie.url ?
            eachMovie.vip ? 
            isSubscribed?  <a href={eachMovie.url}><img
              className="main-img"
              src={eachMovie.imageSrc}
              alt={`dj afro ${eachMovie.title}`}
              key={eachMovie.title}
            /> 
             </a> :
             <img
             className="main-img"
             src={eachMovie.imageSrc}
             alt={`dj afro ${eachMovie.title}`}
             key={eachMovie.title}
           /> 
            

            :
            <a href={eachMovie.url}><img
              className="main-img"
              src={eachMovie.imageSrc}
              alt={`dj afro ${eachMovie.title}`}
              key={eachMovie.title}
            /> 
             </a>
            :<img
            className="main-img"
            src={eachMovie.imageSrc}
            alt={`dj afro ${eachMovie.title}`}
            key={eachMovie.title}
          /> 
           
           }
            </div>
          </div>
          <h3>
           
              <span>{eachMovie.title}</span>
              <span>{!isSubscribed && eachMovie.vip && <img className="isVip" src={vip} />}</span>
           
          </h3>
        </div>
      </div>
    );
  });

  return (
    <div className="horizontal-container" id="horizontal-container">
      <div className="horizontal-container-container"></div>
      <div className="section">{mapSectionMovies}</div>
    </div>
  );
}
