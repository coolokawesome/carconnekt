import React, { useEffect, useState } from 'react'
import { selectedCar, allCarsAvailable } from './atoms.js'
import {useRecoilState, useRecoilValue} from 'recoil'


function CurrentCarComponent() {
    const currentCar = useRecoilValue(selectedCar)
    const [car, setCar] = useState()
    return(
     <>
        {console.log(currentCar[0])}
     </>   
    )
} 

export default CurrentCarComponent