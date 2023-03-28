import {useState, React} from 'react'
import CarData from './Objects/Cars'

function HomeFleet() {
    const [selectedCar, setSelectedCar] = useState(CarData[0])

    const configureCar = (carId) => {
        const selectedCar = CarData.find((car) => car.id === carId)
        setSelectedCar(selectedCar)
    }
    return (
        <>
        <div className='container text-center mt-5 mb-5'>
        <h3 className='display-5'>Our Top Rentals</h3>
        <p className='text-muted mb-5'>Choose from a variety of our amazing vehicles to rent for your next business trip or adventure</p>
        <div className='row'>
        <div className='col-12 col-lg-3 '>
            <button onClick={() => configureCar(1)}
                    className='car-btn col-12 text-light' id='car1'>Tesla Model 3</button>
            <button onClick={() => configureCar(2)}
                    className='car-btn col-12 text-light' id='car2'>Honda Accord</button>
            <button onClick={() => configureCar(3)}
                    className='car-btn col-12 text-light' id='car3'>Jeep Wrangler</button>
            <button onClick={() => configureCar(4)}
                    className='car-btn col-12 text-light' id='car4'>Ford F-350</button>
            <button onClick={() => configureCar(5)}
                    className='car-btn col-12 text-light' id='car5'>Mini Cooper S</button>
            <button onClick={() => configureCar(6)}
                    className='car-btn col-12 text-light' id='car6'>Nissan Sentra</button>
            <button onClick={() => configureCar(7)}
                    className='car-btn col-12 text-light' id='car7'>Volkswagen Golf MK8</button>
            <button onClick={() => configureCar(8)}
                    className='car-btn col-12 text-light' id='car8'>Audi E-Tron</button>
        </div>
        <div className='col-12 col-lg-6'> 
        <img src={selectedCar.images} className="img img-fluid col-10 offset-1"/>
        </div>
        <div className='col-12 col-lg-3'> 
            <div className='row text-light price-container pt-2 pb-2'>
                <h3 id='carPrice'><i class="fa-solid fa-dollar-sign pe-1"></i><nobr className='car-price'>{selectedCar.price}</nobr>/day</h3>
            </div>
            <div className='info-box row'>
                <p className='col-6 text-start'>Make</p><p className='col-6 text-end'>{selectedCar.make}</p>
                <p className='col-6 text-start'>Model</p><p className='col-6 text-end'>{selectedCar.model}</p>
                <p className='col-6 text-start'>Year</p><p className='col-6 text-end'>{selectedCar.year}</p>
                <p className='col-6 text-start'>Transmission</p><p className='col-6 text-end'>{selectedCar.transmission}</p>
                <p className='col-6 text-start'>doors</p><p className='col-6 text-end'>{selectedCar.doors}</p>
                <div className='col-12 '><button className='btn btn-primary px-0 mt-4 col-12 pt-2 reserve-btn pb-2' on >Reserve Now</button></div>
            </div>
         </div>
        </div>
        
        </div>
        <div className='row mt-5 bg-dark text-center'>
                <div className='col-12 my-5'>
                        <h2 className='text-light display-3'>Save big with Car Connekt</h2>
                        <h4 className='text-light'>Cheapest rates. Local Suppliers. <a className='special-text'><u>24/7</u></a> support.</h4>
                </div>
        </div>
        </>
    )
}

export default HomeFleet