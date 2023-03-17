import { useEffect, useState, useContext } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import CampCard from '../components/CampCard'
import { AuthContext } from "../context/auth.context"

const CampingsListPage = () => {

    const [camps, setCamps] = useState([])
    const [refresh, setRefresh ] = useState(true)
    const {loggedInUser} = useContext(AuthContext)

    const headers = {           
        'Authorization': `Bearer ${loggedInUser.jwt}`
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/camps`)
        .then(response => {
            setCamps(response.data)
        })
        .catch(err => console.log(err))
    }, [refresh])
    const deleteCamp = campId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/camps/${campId}`, {headers})
        .then(response => {
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Camp excluído',
                showConfirmButton: false,
                timer: 1000
              })
            
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="container">

            <div className="row mb-3">
                { camps.length > 0 && camps.map(camp => {
                    return (
                        <CampCard deleteCamp={deleteCamp} camp={camp} key={camp._id} />
                    )
                })}
            </div>
        </div>

    );
}
 
export default CampingsListPage;
