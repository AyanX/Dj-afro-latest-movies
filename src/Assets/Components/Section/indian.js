import Data from "../data";
import { useContext } from "react";
import vip from "../../Images/asset/user.png";
import { subscribedContext } from "../../../App";
export default function Indian() {
  const{isSubscribed}=useContext(subscribedContext);
  const sectionMovies = Data.filter(function (eachMovie) {
    return eachMovie.over18 === !true && eachMovie.indian === !false;
  });
  const giftMovie = Data.filter(function (eachMovie) {
    return eachMovie.free;
  });

  const free = giftMovie.map((eachMovie) => (
    <img src={eachMovie.imageSrc} className="free" />
  ));

  const mapSectionMovies = sectionMovies.map(function (eachMovie) {
    return (
      <div className="section-movie" key={eachMovie.title}>
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
    <div className="horiontal-container">
      <div className="teen-gift">
        <h1>Free Gift from Admin</h1>
        <div>{free}</div>
      </div>
      <div className="section">{mapSectionMovies}</div>;
    </div>
  );
}
