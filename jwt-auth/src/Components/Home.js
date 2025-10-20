import './css/home.css'
import LeftHome from './LeftHome';
import RightHome from './RightHome';

function Home() {
    return(
        <div className="home">
            <RightHome/>
            <LeftHome/>
        </div>
    )
}


export default Home;