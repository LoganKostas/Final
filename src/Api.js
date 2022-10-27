import Recommendations from "./Recommendations"
const clientID= 'DK9KXhsxvZMfzJ00XbNOFsPCHoRUx5IA'
const clientSecret= 'EmLpet7EAEiJcQgn'

// var Amadeus = require('amadeus');
    // var amadeus = new Amadeus({
    //     clientId: 'DK9KXhsxvZMfzJ00XbNOFsPCHoRUx5IA',
    //     clientSecret: 'EmLpet7EAEiJcQgn'
    // });
    // const rec = async () => {
    //     var citys = document.getElementById('cityId').value
    //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${apiId}&units=imperial`)
    //     const data = await response.json()
    //     console.log(data)
    export const getToken = async () => {
        const response = await fetch(`https://test.api.amadeus.com/v1/security/oauth2/token`, {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
            headers: {
                
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })
        const data = await response.json()
        const access_token = data['access_token']
        // console.log(access_token)
        return access_token
    }
    

    export const getrec = async () => {
        const token = await getToken()
        var citys = document.getElementById('cityId').value
    
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=${citys}&travelerCountryCode=US`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await response.json()
        // console.log(data)
        const location = data.name

    const city = citys    
    const city1 = data.data[0].name
    const iata1 = data.data[0].iataCode
    const city2 = data.data[1].name
    const iata2 = data.data[1].iataCode
    const city3 = data.data[2].name
    const iata3 = data.data[2].iataCode
    const city4 = data.data[3].name
    const iata4 = data.data[3].iataCode
    const city5 = data.data[4].name
    const iata5 = data.data[4].iataCode
    document.querySelector('#city-name').innerText = city
    document.querySelector('#city1').innerText = city1
    document.querySelector('#iata1').innerText = 'IATA code:' + ' ' + iata1
    document.querySelector('#city2').innerText = city2
    document.querySelector('#iata2').innerText = 'IATA code:' + ' ' + iata2
    document.querySelector('#city3').innerText = city3
    document.querySelector('#iata3').innerText = 'IATA code:' + ' ' + iata3
    document.querySelector('#city4').innerText = city4
    document.querySelector('#iata4').innerText = 'IATA code:' + ' ' + iata4
    document.querySelector('#city5').innerText = city5
    document.querySelector('#iata5').innerText = 'IATA code:' + ' ' + iata5
    
        return location
    }

    
    
    