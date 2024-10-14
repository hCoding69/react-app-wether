
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
function NowWether(props){

  

  return(
    
    <div className="now d-flex justify-content-center align-items-center gap-5">
      <div className="big position-relative">
        <p className = {props.size === "small"? "smallnumber" : "number"}>{props.currentWether}</p>
        <span className = {props.size === "small"? "smalldegre" : "degre"}>°</span>
      </div>
      <div className="small mb-2">
        <div className="wind d-flex  gap-2">
          <FontAwesomeIcon icon={faWind} />
          <p className="value">{props.wind} km/h</p>
        </div>
        <div className="humid d-flex gap-4 ">
          <FontAwesomeIcon icon={faDroplet} />
          <p className="value">{props.humid} %</p>
          
        </div>
      </div>
    </div>
  )
}
export default NowWether