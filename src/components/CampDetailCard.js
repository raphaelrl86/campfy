const CampDetailCard = () => {
    
    return ( 

        <div class="row">
            <div class="col-md-8">
                <div class="pb-3">
                
                    <img width="100%" src={camp.campImage} alt="profileImage" />
               
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p>Nome: {camp.campName}</p>
                    </div>
                    <div class="col-md-6">
                        <p>Descrição: {camp.description}</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                    <p>Email: {camp.email}</p>
                    <p>Endereço: {camp.address}</p>
                    <p>Cidade: {camp.city}</p>
                    <p>Estado: {camp.state}</p>
                    <p>País: {camp.country}</p>
                    <p>Comodidades: {camp.convenience}</p>
            </div>
        </div>


    );
}
 
export default CampDetailCard;