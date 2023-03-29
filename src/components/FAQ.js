import React from 'react'

function FAQ() {
  return (
    <div className='faq-container p-5'>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-12 text-center'>
            <h4>FAQ</h4>
            <h3 className='display-5'>Frequently Asked Questions</h3>
          </div>
        </div>
        <div className='row col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto'>
          <div class="accordion rounded-5" id="accordion">
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How do I rent a car from Car Connekt?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                <div class="accordion-body">
                  Renting a car from Car Connekt is easy! simply fill out or web form for an email portal, or download our app, upload your documents to get approved!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Can I rent a car without a credit card on file with Car Connekt?
                </button>
              </h2>
              
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                <div class="accordion-body">
                  <p className=''>
                  Car Connekt requires a valid credit card on file in order to rent a car. This is to ensure that any damages or fines incurred during the rental period can be charged to the renter.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What documents do I need to provide to rent a car from Car Connekt?      </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                <div class="accordion-body">
                  Please bring two valid pieces of identification, preferably a passport along with a licence. You will be requested to provide proof of insurance for the passed two years.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                Is there an age limit for renting a car from Car Connekt?</button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                <div class="accordion-body">
                Yes, the minimum age requirement for renting a car from Car Connekt is 21 years old. Drivers under the age of 25 may be subject to a young driver surcharge, depending on the renter's driving abstract.
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ