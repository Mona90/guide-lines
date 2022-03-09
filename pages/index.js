
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Rides from '../component/Rides'
import styles from '../styles/Home.module.css'
export default function Home() {
const [route, setRoute] = useState([])
const [uRouteNum,setURouteNum] = useState(0)

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
    const getRouteData = async() =>{
      try{
        const res = await axios.get(`data/data.json`);
        console.log(res.data);
        setRoute(res.data)
        setURouteNum(res.data.upcoming_rides.length)
      }catch(error){
        console.log(error)
      }
    }
    getRouteData()
}, [])


  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="near-route-tab" data-bs-toggle="pill" data-bs-target="#near-route" type="button" role="tab" aria-controls="near-route" aria-selected="true">Nearest rides</button>
            </li>
            <li className="nav-item mx-3" role="presentation">
              <button className="nav-link" id="upcoming-route-tab" data-bs-toggle="pill" data-bs-target="#upcoming-route" type="button" role="tab" aria-controls="upcoming-route" aria-selected="false">Upcoming rides ({uRouteNum})</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Past rides (2)</button>
            </li>
          </ul>
         
          <div className='filter-route d-flex alin-items-center dropdown'>
            <div className='dropdown-toggle' id="filter-dropdown" role="button" data-bs-toggle="dropdown">
                <Image src="images/filter.png" width={24} height={25} alt="icon"/>
                Filters
            </div>
            <ul className='dropdown-menu' aria-labelledby='filter-dropdown'>
                <li>
                  <select className='form-select mb-2'>
                    <option value={0}>State</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </li>
                <li>
                  <select className='form-select'>
                    <option value={0}>City</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </li>
            </ul>
          </div>
      </div>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="near-route" role="tabpanel" aria-labelledby="near-route-tab">
      <Rides status={route.nearest_rides}/>

      </div>
      <div className="tab-pane fade" id="upcoming-route" role="tabpanel" aria-labelledby="upcoming-route-tab">
        <Rides status={route.upcoming_rides}/>
      </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <Rides />

      </div>
    </div>

    </div>
  )
}
