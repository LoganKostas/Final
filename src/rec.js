<div className="card mx-auto" style={{ width: '18rem' }} id="weather-card">
                <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" id="cityId" />
                <button type="button" className="btn btn-outline-primary" onClick={getrec}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MT7Gw7CGYXdKGO2aN0HJGO39WrBaYu40xA&usqp=CAU" width={30} /> search</button>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="city1">City1</li>
                    <li className="list-group-item" id="city2">City2</li>
                    <li className="list-group-item" id="city3">City3</li>
                    <li className="list-group-item" id="city4">City4</li>
                    <li className="list-group-item" id="city5">City5</li>
                </ul>
            </div>