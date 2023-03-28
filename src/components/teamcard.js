import React from 'react'

function Teamcard(props) {
    return (
        <div className='row col-12 col-md-6 col-lg-4 mx-auto'>
            <div className='card-container'>
                <div className='img-container row'>
                    <img src={props.img} className='rounded-5 staff-img'></img>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h6>{props.name}</h6>
                        <p className='text-muted'>{props.pos}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teamcard