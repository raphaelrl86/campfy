const CampDetailCard = ({camp}) => {

    
    return ( 


        <div className="card m-5">
                
                
                <img src={camp.campImage} className="card-img-top" alt='imagem do acompamento' style={{height:"500px", objectFit: 'cover'}} />
            
            <div className="card-body p-5">
                <h5 className="card-title"> {camp.campName}</h5>
                <p className="card-text"> {camp.email} </p>
                <p className="card-text"> {camp.address} </p>
                <p className="card-text">
                    <spam>  {camp.city} | {camp.state} | {camp.country} </spam>
                </p>
                <p className="card-text">{camp.description}</p>
                <p className="card-text">
                <small className="text-muted">Última atualização em {new Date (camp.updatedAt).toLocaleString('pt-br')}</small>
                </p>
                <p className="card-text">
                    
                    <ul className="list-group">
                    { camp.convenience.length > 0 && camp.convenience.map(convenience => {
                        return (
                            <li className="list-group-item"> {convenience} </li>    
                        )
                    })}
                    </ul>
                </p>
            </div>
        </div>

    );
}
 
export default CampDetailCard;