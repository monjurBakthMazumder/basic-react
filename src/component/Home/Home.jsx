import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'
const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header/>
            {
                navigation.statue === "loading" ?
                <h1>Loading..</h1>
                :
                <Outlet></Outlet>
            }
            <Footer/>
        </div>
    );
};

export default Home;