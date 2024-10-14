




function DayWether(props){

  const day = new Date(props.day);

  if (isNaN(day.getTime())) {
    return <div>Invalid date</div>; // Handle invalid date gracefully
  }

  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day);
  return(
    
      <div className="row justify-content-center align-items-center col-lg-2 col-md-4">
        <div className="box d-flex flex-column flex-wrap justify-content-between align-items-center mt-lg-0 mt-2">
          <p className="today">{dayName}</p>
          <p className="how">{props.degree}°</p>
        </div>
      </div>

  )
}


export default DayWether;