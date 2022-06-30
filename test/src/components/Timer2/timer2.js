//rfc

import React, { useEffect, useState } from 'react'

const Timer2 = () => {

    const [time, setTime] = useState(0);
    const [countryName, setCountryName] = useState("");
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/name/hungary")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        console.log("useEffect called")

    }, [time]);

    useEffect(() => {
        const fetchData = async () => {
            let fetchIt = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            let response = await fetchIt.json();
            console.log(response);

            setCountry(response[0].name.common)
        }

        if (countryName !== "") {
            return fetchData
        }

    }, [countryName])

    useEffect(() => {
        if (countryName !== "") {
            setCountryName("")
        }
    }, [countryName]);

    return (
        loading ? <div>Loading...</div> :
            <>
                <div>
                    {time}
                </div>
                <input type="text" onChange={event => { setCountryName(event.target.value) }}></input>
                {/* <button onClick={event => { setCountryName(event.target.value) }}>Get country data</button> */}
                <button onClick={() => { setTime(time + 1) }}>
                    Increment
                </button>
                <div className="country">{country}</div>
            </>
    )
}

export default Timer2
