import CarouselImage from '../components/CarouselImage'
import Banner from '../components/Banner';
import Jumbotron from '../components/Jumbotron';

const HomePage = () => {
    return ( 
        <div className="HomePage">
            <CarouselImage/>
            <Banner/>
            <Jumbotron/>
        </div>
     );
} 
export default HomePage;