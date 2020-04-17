import React,{useContext} from 'react'
import {Context} from './Context'
import globeimg from './assets/globe.png'



export default function Header() {
    const [global, countries, searchers, searchingTerm] = useContext(Context);
    return (
        <div id="header">
        <div className="search">
            <input onChange = { (event)=> searchingTerm(event) } type="text" placeholder="search country..."/>
        </div> 
        <div className="info" >
        <div className="icon">
          <img src={globeimg} alt=""/>
        </div>
            <div>
                <h5>New Confirmed</h5>
                <h4> {global.newconfirmed.toLocaleString()} </h4>
            </div>
            <div >
             <h5 >Total Confirmed</h5>
             <h4>{global.totalconfirmed.toLocaleString()}</h4>
            </div>
        </div>
    </div>
    )
}
