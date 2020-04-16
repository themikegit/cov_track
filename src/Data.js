import React from 'react'

export default function Data(props) {
    const ax = props.code
    const imgid = `https://www.countryflags.io/${ax}/shiny/64.png`
    return (
    
        <div id="contain">
     <div id="panel">
       <div className="country-name">
        <img src= {imgid} />
           <h1> {props.country} </h1>
       </div>
       <div className="country-data">
           <div className="left">
               <div className="new-confirmed">
                   <div>
                    <h5>New Confirmed</h5>
                   <h4> {props.newconfirmed} </h4>
                   </div>
                   <div className="date" >
                       <p>34/34/23</p>
                   </div>
                 
               </div>
            <div className="total-confirmed">
                <h5>Total Confirmed</h5>
               <h4>{props.totalconfirmed}</h4>
            </div>
           </div>
           <div className="right">
               <div className="new-deaths">
                <h5>New Deaths</h5>
                <h4>{props.newdeaths}</h4>
               </div>
               <div className="total-deaths">
                <h5>Total deaths</h5>
               <h4>{props.totaldeaths}</h4>
            </div>
            <div className="new-recovered">
                <h5>New Recovered</h5>
               <h4>{props.newrecovered}</h4>
            </div>
            <div className="total-recovered">
                <h5>Total Recovered</h5>
               <h4>{props.totalrecovered}</h4>
            </div>
           </div>
       </div>
   </div>
   </div>
    )
}
