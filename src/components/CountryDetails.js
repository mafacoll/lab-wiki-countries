import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function CountryDetails() {

    const {cca3} =useParams()
    const [detail, setDetail] =useState(null)

    useEffect(()=>{
        async function getData(){
            let response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)   
            const {flags, name, capital, area, borders} = response.data
            let country ={
                flag: flags.svg,
                name: name.common,
                capital:capital,
                area: area,
                borders: borders
            }
            setDetail(country)
        }
        getData()
    }, [cca3])


    return (
         <div>
         <h1> Country detail </h1>
             <img src ={detail.image} />
             <h2>{detail.name}</h2>
             <p>Capital {detail.capital}</p>
             <p>Borders {detail.borders}</p>
             <p>Area {detail.area}</p>

         </div>
     )
}

export default CountryDetails
