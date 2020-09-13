import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';  //theme css file for the date picker
import { DateRangePicker } from "react-date-range";


function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());    
  const selectionRange = {startDate: startDate,endDate: endDate,key: "selection",}; //Compulsory if you are using npn date thing
  
  function handleSelect(ranges) {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
  }
  
  return (
        <div className="search">
            <DateRangePicker range={[selectionRange]} onChange={handleSelect} />
      
        </div>
  )
}

export default Search 