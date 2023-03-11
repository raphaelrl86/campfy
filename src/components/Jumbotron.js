const Jumbotron  = () => {
    return ( 

<div
  className="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
  style={{backgroundImage: `url("https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")`, objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}
>
  <h1 className="mb-3 h2">TEXTO DE IMPACTO</h1>

  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
    labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
    neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
  </p>
</div>



    );
}
 
export default Jumbotron;
