import './Recommendations.css'
import React from 'react'
import { getrec, getToken } from './Api'
import { Link } from 'react-router-dom'
export default function Recommendations() {



    return (
        <div>
            <h4 id='head-text'>Search a city that you've been to in order to see recommendations. </h4>
            <h4 id='head-text'>City needs to be in IATA format (Airport code EX:ATL)</h4>
            <div className="card mx-auto" style={{ width: '18rem' }} id="weather-card">
                <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" id="cityId" />
                <button type="button" className="btn btn-outline-primary" onClick={getrec}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MT7Gw7CGYXdKGO2aN0HJGO39WrBaYu40xA&usqp=CAU" width={30} /> search</button>
                <h5 id='city-name'>Example:FRA (Frankfurt) </h5>
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="city1">City1</li>
                    <li className="list-group-item" id="city2">City2</li>
                    <li className="list-group-item" id="city3">City3</li>
                    <li className="list-group-item" id="city4">City4</li>
                    <li className="list-group-item" id="city5">City5</li>
                </ul> */}
            </div>
            <div className="d-flex justify-content-center">
                <div className="card">
                    <img id='img1' src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title" id="city1">Munich</h5>
                        <p className="card-text" id='iata1'>IATA code: MUC</p>
                        <br></br>
                    </div>
                </div>
                <div className="card">
                    <img id='img1' src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title" id="city2">Paris</h5>
                        <p className="card-text" id='iata2'>IATA code: PAR</p>
                    </div>
                </div>
                <div className="card">
                    <img id='img1' src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="city3">Berlin</h5>
                        <p className="card-text" id='iata3'>IATA code: BER</p>
                    </div>
                </div>
               
            </div>
            <div className="d-flex justify-content-center">
                <div className="card">
                    <img id='img1' src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="city4">Amsterdam</h5>
                        <p className="card-text" id='iata4'>IATA code: AMS</p>
                    </div>
                </div>
                <div className="card">
                    <img id='img1' src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="city5">Düsseldorf</h5>
                        <p className="card-text" id='iata5'>IATA code: DUS</p>
                        <br></br>
                    </div>
                </div>
                
               
            </div>
        </div>


    )
}
