import Header from "./Header";
import NowWether from "./NowWether";
import DayWether from "./DayWether";

function Left(props){
  return(
    <div className="left col-lg-9 col-md-18 pt-5 pb-5">
      <div className="things d-flex flex-column justify-content-between h-100">
        <Header date = {props.date}
                city = {props.city}
          />
        <NowWether currentWether = {Math.floor(props.currentWether)}
                    wind = {props.wind}
                    humid = {props.humid}
          />
        <div className="d-flex justify-content-evenly align-items-center row" row>
          <DayWether day = {props.days[0]}
                      degree = {props.degrees[0]}
                      />
          <DayWether day = {props.days[1]}
          degree = {props.degrees[1]}/>
          <DayWether day = {props.days[2]}
                      degree = {props.degrees[2]}/>
          <DayWether day = {props.days[3]}
          degree = {props.degrees[3]}/>
          <DayWether day = {props.days[4]}
          degree = {props.degrees[4]}/>
          <DayWether day = {props.days[6]}
          degree = {props.degrees[6]}/>
        </div>
        
      </div>
    </div>
  )
}

export default Left;