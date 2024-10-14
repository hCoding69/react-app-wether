


function Header(props){


  return(
    <div className="header">
        <div className="d-flex justify-content-evenly">
            <div className="city">
              <p>{props.city}</p>
            </div>
            <div className="date">
              <p>{props.date}</p>
            </div>
        </div>
    </div>
  )


}
export default Header;