const Jumbotron  = () => {
    return ( 

<div
  className="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
  style={{backgroundImage: `url("https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`, objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom center'}}
>
  <h1 className="mb-3 h2">Conecte-se com a natureza e explore novas aventuras! </h1>

  <p>
  Bem-vindo ao Campfy, sua porta de entrada para uma experiência inesquecível ao ar livre
  </p>
</div>



    );
}
 
export default Jumbotron;
