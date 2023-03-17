import {Link} from 'react-router-dom'

const Banner = () => {
    
    return ( 

        <div className="row">
            <div className="col-sm-6 p-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Desperte seu espírito aventureiro</h5>
                    <p className="card-text"> Pegue sua mochila, junte-se a nós e descubra tudo o que a natureza tem a oferecer!</p>
                    <Link to="/signup" className="btn btn-secondary">Registre-se</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-6 p-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Encontre o lugar ideal para se desconectar</h5>
                    <p className="card-text">Descubra o seu refúgio perfeito na natureza e conte com a avaliação dos nossos usuários</p>
                    <Link to="/camps" className="btn btn-secondary">Veja os campings!</Link>
                </div>
                </div>
            </div>
        </div>

    );
}
 
export default Banner;