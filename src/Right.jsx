
import NowWether from "./NowWether";
import RealTime from "./RealTime";

function Right(props){
  return(
    <div className="right col-lg-3 col-md-6 pt-5 d-none d-lg-block">
      <div className="things d-flex justify-content-center align-items-center flex-column">
        <div className="searsh">
          <input type="text" className="rounded-pill" placeholder="Enter a city" onChange={props.handleCityChange} value={props.city}/>
        </div>
        <RealTime time = {props.time} />
        <NowWether  size = "small" 
                    currentWether = {Math.floor(props.currentWether)}
                    wind = {props.wind}
                    humid = {props.humid}
                  />
        
      </div>
    </div>
  )
}

export default Right;