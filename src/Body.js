import React,{useContext} from 'react'
import Data from './Data'
import {Context} from './Context'
export default function Body() {
const [global, countries,searchers] = useContext(Context)


    return (
        <div id="contain" >
            {searchers.map( item => <Data
            key = {item.Slug}
            code = {item.CountryCode}
            country = {item.Country}
            newconfirmed = {item.NewConfirmed}
            newrecovered = {item.NewRecovered}
            newdeaths = {item.NewDeaths}
            totaldeaths = {item.TotalDeaths}
            totalrecovered = {item.TotalRecovered}
            totalconfirmed = {item.TotalConfirmed}
            date = {item.Date}
            /> )}
        </div>
    )
}
