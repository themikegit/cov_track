import React,{useState, createContext, useEffect} from 'react'
import axios from 'axios'


export const Context = createContext();



export const Provider = props => {

    const searchTerm = () => {
        console.log("hell")
    }

    useEffect(()=> {
        axios.get(' https://api.covid19api.com/summary')
         .then(res => {
           setGlobal( {
                   newconfirmed: res.data.Global.NewConfirmed,
                   totalconfirmed: res.data.Global.TotalConfirmed
               })
            setCountries(res.data.Countries)
          }
          )
         .catch(err  => {
           console.log(err)
         })
      }, []);

    const [global, setGlobal] = useState({
        newconfirmed: '',
        totalconfirmed: ''
    });

    const [countries, setCountries] = useState([]);

    const [searchres, setSearchres] = useState([]);


    const searchingTerm = (event) => {
        const resul = countries.filter(item => item.Country.toLowerCase().includes(event.target.value.toLowerCase()))
        setSearchres(resul);

    };

    return (
        <Context.Provider value = {[global, countries, searchres, searchingTerm, ]} >
            {props.children}
        </Context.Provider>
    )
}