import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './stateWise.css'

export default function StateWise() {

    let [data, setData] = useState([]);


    async function getCovidData() {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')   // it simply calls the data from api
            const actualData = await res.json()     // to get data in json format
            setData(actualData.statewise)        // to get first object inside statewise(i.e of total)
            console.log(actualData.statewise);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <div className="bodyy">
            <div className="container-fluid mt-4">

                <div className="main-heading">
                    <h1 className="mb-4 text-center"><span className="india">INDIA </span>COVID-19 Tracker</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index} id="pppp">
                                            <th id="not">{item.state}</th>
                                            <td>{item.confirmed}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.active}</td>
                                            <td>{item.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}