import React,{useContext} from 'react'
import {Context} from './Context'



export default function Header() {
    const [global] = useContext(Context);
    return (
        <div id="header">
        <div className="search">
            <input type="text" placeholder="search country"/>
        </div> 
        <div className="info" >
        <div className="icon">
        </div>
            <div>
                <h5>New Confirmed</h5>
                <h4> {global.newconfirmed} </h4>
            </div>
            <div >
             <h5 >Total Confirmed</h5>
             <h4>{global.totalconfirmed}</h4>
            </div>
        </div>
    </div>
    )
}
