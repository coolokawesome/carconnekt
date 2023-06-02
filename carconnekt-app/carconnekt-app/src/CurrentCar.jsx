import React, { useEffect, useState } from 'react'
import { selectedCar, allCarsAvailable } from './atoms.js'
import {useRecoilState, useRecoilValue} from 'recoil'
import './CurrentCar.sass'

function CurrentCarComponent() {
    const currentCar = useRecoilValue(selectedCar)
    const [car, setCar] = useState(currentCar[1])

    return(
     <>
    <div className='current-car-component-container p-3'>
        <div className='current-car-component-header'>
            <p>Current Reservation</p>          
        </div>
        <div className='current-car-component-body'>
            <div className='row d-flex align-items-center'>
                <div className='col-6'>
                <h2 className=''>{`${car.make } ${car.model}`}</h2>
                </div>
                <img className='img img-fluid col-6' src={car.img}></img>
            </div>

            <div className='row d-flex justify-content-between'>
                <p className='col-6 text-start'>{`Toronto, ON`}</p>                

            </div>
        </div>
    </div>
     </>   
    )
} 

export default CurrentCarComponent