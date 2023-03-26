import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
    <div className='container text-start'>
        <div className='row'>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className='text-start text-info'>Car Connekt</h3>
                <div> <p><b>The cheapest, easiest car rental service</b></p></div>
                <div><a> <i></i><p>{'(416) 778-0018'}</p></a></div>
               <div> <a><i></i>info@carconnekt.ca</a></div>
              <div className='mt-3'><a>designed by Syrus Samson</a></div>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className='text-start text-info'>Branches</h3>
                <div><a>Toronto</a></div>
                <div><a>Thunder Bay</a></div>
                <div><a>Calgary</a></div>
                <div><a>Victoria</a></div>
                <a className='mt-5 link-info text-decoration-none'><h3>Careers</h3></a>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className='text-start text-info'>Working Hours</h3>
                <div className='row'>
                    <p className='col-6 text-start'>Mon - Fri: </p><p  className='text-start col-6' >8am - 8pm</p>
                    <p className='col-6 text-start'>Sat: </p><p className='text-start col-6' >9am - 5pm</p>
                    <p className='col-6 text-start'>Sun: </p><p className='text-start col-6' >Closed</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5 px-2 m-0'>
                <h3 className='text-start text-info'>Subscribe</h3>
                <p>weekly newsletter with promotions. opt out at any time.</p>
                <div className='row container'>
                    
                    <input placeholder='enter your email'></input>
                    <button className='col-12 btn btn-primary mt-4'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer