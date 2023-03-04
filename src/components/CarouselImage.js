import campImage from '../images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg'
import coffeeCampImage from '../images/shelby-cohron-ESNV6KmLJMg-unsplash.jpg'
import bonfireCampImage from '../images/chris-holder-uY2UIyO5o5c-unsplash.jpg'
import  Carousel  from 'nuka-carousel';

const CarouselImage = () => {

  return (

          <Carousel wrapAround={true} zoomScale={0.1} style={{height:"500px"}} autoplay = "true">
            <img src={campImage} alt='imagem de acampamento' style={{width:"100vw", height:"500px", objectFit: 'cover'}}/>
            <img src={coffeeCampImage} alt='imagem de xícaras de café em acampamento'style={{width:"100vw", height:"500px", objectFit: 'cover'}} />
            <img src={bonfireCampImage} alt='imagem de fogueira em acampamento' style={{width:"100vw", height:"500px", objectFit: 'cover'}} />
        </Carousel>
  )

}
export default CarouselImage;
