import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import './covidTotal.css'


export default function CovidTotal() {

    const history = useHistory();

    let [data, setData] = useState([]);

    async function getCovidData() {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')   // it simply calls the data from api
            const actualData = await res.json()     // to get data in json format
            setData(actualData.statewise[0])        // to get first object inside statewise(i.e of total)
            console.log(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <div className="body">
            <div className="heading_div">
                <h3 className="live">🔴 LIVE</h3>
                <h1>COVID-19 CORONAVIRUS TRACKER</h1>
            </div>


            <div className="card_div">

                <div className="card_inner">
                    <p className="card_name"><span>OUR</span> COUNTRY</p>
                    <p className="card_total">INDIA</p>
                </div>

                <div className="card_inner">
                    <p className="card_name"><span>OUR</span> ACTIVE</p>
                    <p className="card_total">{data.active}</p>
                </div>

                <div className="card_inner">
                    <p className="card_name"><span>OUR</span> CONFIRMED</p>
                    <p className="card_total">{data.confirmed}</p>
                </div>

                <div className="card_inner">
                    <p className="card_name"><span>OUR</span> DEATHS</p>
                    <p className="card_total">{data.deaths}</p>
                </div>

                <div className="card_inner">
                    <p className="card_name"><span>OUR</span> RECOVERED</p>
                    <p className="card_total">{data.recovered}</p>
                </div>

                <div className="card_inner">
                    <p className="card_name"><span>LAST</span> UPDATED</p>
                    <p className="card_total">{data.lastupdatedtime}</p>
                </div>

            </div>

            <button onClick={() => {
                history.push("/statewise")
            }}>VIEW STATEWISE REPORT</button>
        </div>
    );
}


