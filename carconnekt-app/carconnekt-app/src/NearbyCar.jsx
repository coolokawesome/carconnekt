import React, { useEffect, useState } from 'react'
import { selectedCar, allCarsAvailable } from './atoms.js'
import {useRecoilState, useRecoilValue} from 'recoil'
import './NearbyCar.sass'
function NearbyCar() {
    const currentCar = useRecoilValue(selectedCar)
  return (
    <div className='mt-5'>
        <h5>Nearby Cars</h5>
        <div className='nearby-car-component-container'>
            {
                currentCar.map((car, id) => {
                    return(
                        <div key={id} className='nearby-car-container my-2 d-flex align-items-center justify-content-between'>
                                <div className='ps-2'>
                                    <h5 className=''>{car.make}</h5> 
                                    <p>{car.location.distance}KM</p>
                                </div>
                                <div>
                                    <img className='img img-fluid car-img me-3' src={car.img}></img>
                                </div>
                        </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default NearbyCar