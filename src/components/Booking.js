import { React, useState } from 'react'
import Error from './Error';
import Modal from "react-bootstrap/Modal";
import Cars from './Objects/Cars'
function Booking() {

  const [carValue, setCarValue] = useState('Tesla Model 3')
  const [pickupValue, setPickupValue] = useState('Toronto')
  const [dropoffValue, setDropoffValue] = useState('Toronto')
  const [departureValue, setDepartureValue] = useState(null)
  const [arrivalValue, setArrivalValue] = useState(null)
  const [isError, setIsError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [carImg, setCarImg] = useState('')
  const [success, setSuccess] = useState(false)

  const updateCarValue = e => {
    setCarValue(
      e.target.value
    );

  }
  const updatePickupValue = e => {
    setPickupValue(
      e.target.value
    );
  }
  const updateDropoffValue = e => {
    setDropoffValue(
      e.target.value
    );
  }
  const updateDepatureValue = e => {
    setDepartureValue(
      e.target.value
    );
  }
  const updateArrivalValue = e => {
    setArrivalValue(
      e.target.value
    );
  }
const handleModalFormSubmisson = e => {
  setShowModal(false)
  setSuccess(true)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((carValue === null) || (pickupValue === null) || (dropoffValue === null) || (departureValue === null) || (arrivalValue === null)) {
      setIsError(true)
    }
    else {
        setCarImg(
          console.log(carValue)
        )
        if (carValue == 'Tesla Model 3') {
          setCarImg(Cars[0].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Honda Accord') {
          setCarImg(Cars[1].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Jeep Wrangler') {
          setCarImg(Cars[2].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Ford F-350') {
          setCarImg(Cars[3].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Mini Cooper S') {
          setCarImg(Cars[4].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Nissan Sentra') {
          setCarImg(Cars[5].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Volkswagen Golf MK8') {
          setCarImg(Cars[6].images)
          console.log('CAR: ' + carImg)
        }
        if (carValue == 'Audi E-Tron') {
          setCarImg(Cars[7].images)
          console.log('CAR: ' + carImg)
        }
      setIsError(false);
      setShowModal(true);
    }
  }

  return (
    <section id='book'>
      <div className='container booking-container p-5'>
        <div className='row'>
          <h3>Plan your trip</h3>
        </div>
        <div id='infocontainer'>
          <form onSubmit={handleSubmit}
            className='row'>
            <div className='col-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <p className='booking-text mb-0'>Select Your Car</p>
              <select id='car'
                class="form-select"
                aria-label="Select Car"
                onChange={updateCarValue}>
                <option value="Tesla Model 3">Tesla Model 3            </option>
                <option value="Honda Accord">Honda Accord              </option>
                <option value="Jeep Wrangler">Jeep Wrangler            </option>
                <option value="Ford F-350">Ford F-350                  </option>
                <option value="Mini Cooper S">Mini Cooper S            </option>
                <option value="Nissan Sentra">Nissan Sentra            </option>
                <option value="Volkswagen Golf MK8">Volkswagen Golf MK8</option>
                <option value="Audi E-Tron">Audi E-Tron                </option>
              </select>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <p className='booking-text mb-0'>Pick-Up Location</p>
              <select id='pickup'
                class="form-select"
                aria-label="Pickup location"
                placeholder='-- Pickup Location --'
                onChange={updatePickupValue}>
                <option value="Toronto">Toronto        </option>
                <option value="Brampton">Brampton      </option>
                <option value="Thunder Bay">Thunder Bay</option>
                <option value="Calgary">Calgary        </option>
                <option value="Victoria">Victoria      </option>
                <option value="Ottawa">Ottawa          </option>
              </select>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <p className='booking-text mb-0'>Drop-Off Location</p>
              <select id='dropoff' class="form-select" aria-label="Drop-off location" placeholder='-- Dropoff Location --'
                onChange={updateDropoffValue}>
                <option value="Toronto">Toronto        </option>
                <option value="Brampton">Brampton      </option>
                <option value="Thunder Bay">Thunder Bay</option>
                <option value="Calgary">Calgary        </option>
                <option value="Victoria">Victoria      </option>
                <option value="Ottawa">Ottawa          </option>
              </select>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <p className='booking-text mb-0'>Departure Date</p>
              <input value={this} id='departure' type='date' class="form-select" aria-label="Departure Date" placeholder='-- Departure Date --'
                onChange={updateDepatureValue}>
              </input>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-3 mt-3'>
              <p className='booking-text mb-0'>Arrival Date</p>
              <input id='arrival' type='date' class="form-select" aria-label="Arrival Date" placeholder='-- Arrival Date --'
                onChange={updateArrivalValue}>
              </input>
            </div>
            <div className='col-12 col-md-6 col-lg-4 '>
              <button type='submit' className='col-12 btn btn-primary book-btn'>Book Now</button>
            </div>
          </form>
          {
            isError === true ?
              <Error />
              :
              <></>
          }
          {
            success === true ? <div className='alert alert-success mt-2'>Success! please check your email for confirmation.</div> : <></>
          }
          {
            showModal === false ? <Modal show={false}> </Modal> :
              <Modal show={true}
                size='lg'>

                <Modal.Header className='row modal-header'>
                  <div className='row'>
                    <div className='col-11'><h3>Complete your Reservation</h3></div>
                    <button onClick={() => setShowModal(false)} className='col-1 btn btn-primary'>X</button>
                  </div>
                </Modal.Header>

                <Modal.Body>
                  <div >
                    <div className='row'>
                      <div className='col-12 alert alert-info'>
                        <h3>Upon Registration you will recieve:</h3>
                        <p>Your rental voucher to show on arrival at the rental desk, and a toll-free customer support number.</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 col-lg-6 text-center text-lg-start'>
                        <h3>Location and Date</h3>
                        <i></i><div className='mb-4'><h5 className='col-12'>Departure Date:</h5> {new Date(departureValue).toDateString()}</div>
                        <i></i><div className='mb-4'><h5 className='col-12'>Arrival Date:</h5>{new Date(arrivalValue).toDateString()}</div>
                        <i></i><div className='mb-4'><h5 className='col-12'>Pickup Location:</h5> {pickupValue}</div>
                        <i></i><div className='mb-4'><h5 className='col-12'>Arrival Destination:</h5> {dropoffValue}</div>
                      </div>
                      <div className='col-12 col-lg-6'>
                        <h3 className='text-center'>{carValue}</h3>
                        <img className='img img-fluid text-center' src={carImg}></img>
                      </div>
                    </div>
                    <div className='row'>
                      <h3>Please enter your information:</h3>
                      <div className='col-6'>
                        <p>First Name: </p>
                        <input required className='span input-group' placeholder='first name'></input>
                      </div>
                      <div className='col-6'>
                        <p>Last Name: </p>
                        <input required className='span input-group' placeholder='last name'></input>
                      </div>
                      <div className='col-6'>
                        <p>Email: </p>
                        <input required type='email' className='span input-group' placeholder='email'></input>
                      </div>
                      <div className='col-6'>
                        <p>Phone number: </p>
                        <input required type='phone' className='span input-group' placeholder='phone number'></input>
                      </div>
                      <div className='col-6'>
                        <p>Address: </p>
                        <input required type='address' className='span input-group' placeholder='phone number'></input>
                      </div>
                      <div className='col-6'>
                        <p>Postal Code: </p>
                        <input required type='phone' maxLength='7' minLength='7' className='span input-group' placeholder='A1A 1A1'></input>
                      </div>
                      <div className='col-12'>
                        <button onClick={handleModalFormSubmisson} >submit</button>
                      </div>
                      
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
          }
        </div>
      </div>
      {/* {MODAL IS NEEDED HERE} */}
    </section>
  )
}

export default Booking