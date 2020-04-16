import React from 'react'

export default function Header() {
    return (
        <div id="header">
        <div className="search">
            <input type="text" placeholder="search country"/>
        </div> 
        <div className="info" >
        <div className="icon">
        </div>
            <div>
                <h5>Confirmed</h5>
                <h4>23324</h4>
            </div>
            <div >
             <h5 >New Deaths</h5>
             <h4>3405</h4>
            </div>
        </div>
    </div>
    )
}
