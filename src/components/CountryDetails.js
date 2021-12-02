import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';
function CountryDetail() {
    const {cca3} = useParams();
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        async function getData(){
            let response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
            const {flags, name, capital, area, borders} = response.data[0]
            let country = {
                cca3: cca3,
                flag: flags.svg,
                name: name.common,
                capital: capital[0],
                area: area,
                borders: borders,
            }
            console.log(country)
            setDetail(country)
        }
        getData()
    }, [cca3])
    if (!detail) {
        return <p>Loading...</p>;
      }
    return (
        <div>
            <img src={detail.flag} alt="flag" />
            <h1> {detail.name} </h1>
            <p>Capital {detail.capital}</p>
            <p>Area {detail.area}</p>
            <p>Borders {detail.borders} <br/></p>
        </div>
    )
}
export default CountryDetail