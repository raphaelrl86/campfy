import { useEffect, useState } from "react"
import axios from 'axios'
import CampCard from '../components/CampCard'


const CampingsListPage = () => {

    const [camps, setCamps] = useState([])

    // const token = localStorage.getItem('token')

    // const headers = {
    //     'Authorization': 'Bearer ' + token
    // }

    // useEffect(() => {
    //     axios.get('http://localhost:3001/camps', {headers})
    //     .then(response => {
    //         setCamps(response.data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/camps')
        .then(response => {
            setCamps(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <h1>Camps</h1>

            <div className="row">
                { camps.length > 0 && camps.map(camp => {
                    return (
                        <CampCard camp={camp} key={camp._id} />
                    )
                })}
            </div>
        </div>

    );
}
 
export default CampingsListPage;
