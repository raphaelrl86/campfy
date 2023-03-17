import {Link} from "react-router-dom"

const ProfileCard = ({user}) => {
    
    return ( 

        <section className="h-100 gradient-custom-2 mb-5">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card">
                    <div className="rounded-top d-flex flex-row" style={{height:"200px"}}>
                        <div className="ms-4 mt-3 d-flex flex-column" style={{width:"150px"}}>
                        
                        <img src={user.profileImage} alt="Imagem de perfil" className="img-fluid img-thumbnail mt-4 mb-2" style={{width:"150px", zIndex: '1'}}/>
                        <Link to={`/edit/users/${user._id}`} type="button" className="btn btn-secondary mt-2 mb-3" style={{zIndex: '1'}}>
                            Editar perfil 
                        </Link>
                        </div>

                        <div className="ms-3" style={{marginTop: '100px'}}>
                            <h5>Olá {user.name} {user.surname}!</h5>
                        </div> 
                    </div>
                    <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                        <div className="d-flex justify-content-end text-center py-1">
                        {/* <div>
                            <p className="mb-1 h5">253</p>
                            <p className="small text-muted mb-0">Photos</p>
                        </div>
                        <div className="px-3">
                            <p className="mb-1 h5">{user.commentary.length}</p>
                            <p className="small text-muted mb-0">Followers</p>
                        </div> */}
                        <div>

                            
                            {/* <p className="mb-1 h5">{user.commentary.length}</p>
                            <p className="small text-muted mb-0">Comentários</p> */}
                        </div>
                        </div>
                    </div> 
                    <div className="card-body p-4 text-black">
                        <div className="mb-5">
                        <p className="lead fw-normal mb-1">Sobre:</p>
                        <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                            <p className="font-italic mb-1">{user.email}</p>
                            <p className="font-italic mb-1">{user.address}</p>
                        </div>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </section>

     );
}
 
export default ProfileCard;