

const CommentaryCard = ({commentary}) => {
    return ( 

        <div className='col-3'>
            <div className="card">                
                <div className="card-body">
                    <h5 className="card-title">{ commentary.user }</h5>
                    <p className="card-text">{commentary.commentary}</p>
                    <p className="card-text">{commentary.rating}</p>
                </div>

            </div>
        </div>

    );
}
 
export default CommentaryCard;