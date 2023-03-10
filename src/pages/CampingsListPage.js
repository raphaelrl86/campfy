import { useEffect, useState } from "react"
import axios from 'axios'
import CampCard from '../components/CampCard'
import TesteCard from "../components/TesteCard"


const CampingsListPage = () => {

    const [camps, setCamps] = useState([])

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
            
            {/* <CampCard/> */}

            <div className="row">
                { camps.length > 0 && camps.map(camp => {
                    return (
                        <TesteCard camp={camp} key={camp._id} />
                    )
                })}
            </div>
        </div>

    );
}
 
export default CampingsListPage;
