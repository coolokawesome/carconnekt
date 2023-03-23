import {useState, React} from 'react'
import CarData from './Objects/Cars'
import car1 from './images/tesla.png'

function HomeFleet() {
    const [selectedCar, setSelectedCar] = useState(CarData[0])

    const configureCar = (carId) => {
        const selectedCar = CarData.find((car) => car.id === carId)
        setSelectedCar(selectedCar)
    }
    return (
        <>
        <div className='container text-center mb-5'>
        <h3>Our Rentals</h3>
        <p className='text-muted'>Choose from a variety of our amazing vehicles to rent for your next business trip or adventure</p>
        <div className='row'>
        <div className='col-12 col-lg-3'>
            <button onClick={() => configureCar(1)}
                    className='car-btn col-12' id='car1'>Tesla Model 3</button>
            <button onClick={() => configureCar(2)}
                    className='car-btn col-12' id='car2'>Honda Accord</button>
            <button onClick={() => configureCar(3)}
                    className='car-btn col-12' id='car3'>Jeep Wrangler</button>
            <button onClick={() => configureCar(4)}
                    className='car-btn col-12' id='car4'>Ford F-350</button>
            <button onClick={() => configureCar(5)}
                    className='car-btn col-12' id='car5'>Mini Cooper S</button>
            <button onClick={() => configureCar(6)}
                    className='car-btn col-12' id='car6'>Nissan Sentra</button>
            <button onClick={() => configureCar(7)}
                    className='car-btn col-12' id='car7'>Volkswagen Golf MK8</button>
            <button onClick={() => configureCar(8)}
                    className='car-btn col-12' id='car8'>Audi E-Tron</button>
        </div>
        <div className='col-12 col-lg-6'> 
        <img src={selectedCar.images} className="img img-fluid"/>
        </div>
        <div className='col-12 col-lg-3'> 
            <div>
                <h4 id='carPrice'>${selectedCar.price} /day</h4>
            </div>
            <div className='info-box row'>
                <p className='col-6'>Make</p><p className='col-6'>{selectedCar.make}</p>
                <p className='col-6'>Model</p><p className='col-6'>{selectedCar.model}</p>
                <p className='col-6'>Year</p><p className='col-6'>{selectedCar.year}</p>
                <p className='col-6'>Transmission</p><p className='col-6'>{selectedCar.transmission}</p>
                <p className='col-6'>doors</p><p className='col-6'>{selectedCar.doors}</p>
            </div>
         </div>
        </div>
        </div>
        </>
    )
}

export default HomeFleet