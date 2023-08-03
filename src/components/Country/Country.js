import React from 'react';
import './Country.css'

const Country = (props) => {
    const{area, name, region, flags, population}=props.country;
    return (
        <div className='ddd'>
            <img src={flags.png}></img>
            <p>Countries Name: {name.common}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;