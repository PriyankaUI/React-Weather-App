import React, { useState, useEffect } from 'react'

function Temp() {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState('pune')
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fcc0d278a63ea7666d1867c088759d9`
            const response = await fetch(url)
           
            const resjson = await response.json();
            console.log(resjson.main)
            setcity(resjson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input type="search" className="inptfld"  value={search} onChange={(event) => { setsearch(event.target.value) }} />
                </div>

                {!city ? (<p>no data found</p>) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                                </h2>
                            <h1 className="temp">
                                {city.temp} cel
                            </h1>
                            <h3 className="tempmax">
                                min : {city.temp_min}cel | max : {city.temp_max} cel
                           </h3>
                        </div>
                        <div className="wave1"></div>
                        <div className="wave2"></div>
                        <div className="wave3"></div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Temp
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1fcc0d278a63ea7666d1867c088759d9


