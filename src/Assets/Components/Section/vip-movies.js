import "./vip-movies.css";
import Data from "../data";
import vip from "../../Images/asset/user.png";
import { useContext } from "react";
import { subscribedContext } from "../../../App";
export default function () {
  const sectionMovies = Data.filter(function (eachMovie) {
    return eachMovie.vip === true;
  });
  const{isSubscribed}=useContext(subscribedContext);
  const mapSectionMovies = sectionMovies.map(function (eachMovie) {
    return (
      <div className="section-movie">
        <div className="section-movie-details">
          <div className="section-movie-img">
            <div className="img-container">
              <img
                className="main-img"
                src={eachMovie.imageSrc}
                alt={`dj afro ${eachMovie.title}`}
                key={eachMovie.title}
              />
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
    <>
      
      <div className="section">{mapSectionMovies}</div>
    </>
  );
}
