import './css/home.css'
import LeftHome from './LeftHome';
import RightHome from './RightHome';

function Home() {
    return(
        <div className="home">
            <LeftHome/>
            <RightHome/> 
        </div>
    )
}


export default Home;