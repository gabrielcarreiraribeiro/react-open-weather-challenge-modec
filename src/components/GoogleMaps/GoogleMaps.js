import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import Marker from './Marker'

import { addCountryCode, addCountryLocation, addCountryName } from '../../store/Country/Country.actions'
import './GoogleMaps.css'

import constants from '../../constants'

export default function GoogleMaps(props) {

    const dispatch = useDispatch()
    let [pin, setPin] = useState({})
    const defaultCenter = props.defaultCenter
    const defaultZoom = props.defaultZoom

    useEffect(() => {
        if (props.pin) {
            setPin({ lat: props.pin.lat, lng: props.pin.lng, countryCode: props.pin.countryCode })
        }
    }, [props.pin])

    const handleAPILoaded = (map, maps) => {
        console.log("Map is ready!")
    };

    const addPinToMap = async pinReturn => {

        const getCountryData = await axios.get(`${constants.googleMapsGetCountryUrl}latlng=${pinReturn.lat},${pinReturn.lng}&key=${constants.googleMapsAPIKey}`)
        const results = getCountryData.data.results
        let countryCode = ""
        let countryName = ""

        if (results && results.length > 0) {
            const addressComponents = results.pop().address_components.pop()
            countryCode = addressComponents.short_name
            countryName = addressComponents.long_name
        }

        dispatch(addCountryCode(countryCode))
        dispatch(addCountryName(countryName))
        dispatch(addCountryLocation(pinReturn.lat, pinReturn.lng))

        setPin({ lat: pinReturn.lat, lng: pinReturn.lng, countryCode: countryCode })
        console.log("TESTANDO")
    }

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: constants.googleMapsAPIKey }}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleAPILoaded={(map, maps) => handleAPILoaded(map, maps)}
                onClick={addPinToMap}>

                {props.showMarker && pin.lat && pin.lng && <Marker lat={pin.lat} lng={pin.lng} countryCode={pin.countryCode} />}

            </GoogleMapReact>
        </div>
    );
}