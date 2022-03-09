import Image from 'next/image'
import React from 'react'

function Rides(props) {
  return (
    <div>{props.status ? props.status.map(nRoute => (
        <div className="d-flex flex-column flex-md-row route-box" key={nRoute.id}>
            <div className="flex-shrink-0" style={{width:'200px'}}>
              <Image className='img-fluid' src={nRoute.img_url} width={200} height={120} alt="..."/>
            </div>
            <div className='flex-grow-1 d-flex jutify-content-between'>
            <ul className="route-data flex-grow-1 ms-3 list-unstyled">
                <li>Ride Id : <span>{nRoute.id}</span></li>
                <li>Origin Station : <span>{nRoute.station}</span></li>
                <li>station_path : <span>{nRoute.path}</span></li>
                <li>Date : <span>{nRoute.date}</span></li>
                <li>Distance : <span>{nRoute.distance}</span></li>
            </ul>
            <div className='buttons'>
            <button type="button" className="btn btn-dark btn-sm rounded-pill me-2">City Name</button>
            <button type="button" className="btn btn-dark btn-sm rounded-pill">State Name</button>
            </div>
            </div>
      </div>
      )):(
          <div className='text-center bg-black'>No Data</div>
      )
      }</div>
  )
}

export default Rides