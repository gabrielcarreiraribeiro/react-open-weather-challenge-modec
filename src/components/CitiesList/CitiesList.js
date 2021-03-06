import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addCountryCode, addCountryLocation, addCountryName, addCitiesList, addCountryFlag, addSelectedCity } from '../../store/Country/Country.actions'

import './CitiesList.css'

export default function CitiesList(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSelectCity(city) {

        dispatch(addSelectedCity(city))
        dispatch(addCitiesList(props.cities))
        dispatch(addCountryCode(props.currentCountry.countryCode))
        dispatch(addCountryName(props.currentCountry.countryName))
        dispatch(addCountryLocation(props.currentCountry.countryLocation.latitude, props.currentCountry.countryLocation.longitude))
        dispatch(addCountryFlag(props.currentCountry.countryCode))

        navigate("/CityWeatherDetails")
    }

    return (
        <div className="cities-list-container">

            <span className="cities-list-title">See here the Cities found</span>

            <div className="cities-list-body">
                {props.cities && props.cities.length > 0 ? props.cities.map((city, index) => (
                    <div key={`${city.name}-${index}`}
                        onClick={() => handleSelectCity(city)}
                        className="cities-list-item">
                        <span>{city.name}</span>
                    </div>
                )) : <span className="no-data">No Cities found at the moment</span>}
            </div>

        </div>
    )

}