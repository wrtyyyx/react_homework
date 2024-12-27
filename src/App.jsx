import './App.css'
import Header from "./components/Header/Header.jsx";
import SideNav from "./components/SideNav/SideNav.jsx";
import CentralContainer from "./components/CentralContainer/CentralContainer.jsx";
function App() {

    return (
        <>
            <Header name = {'Dimas'} age = {18}/>
            <div className= 'main_container'>
                <SideNav/>
                <CentralContainer/>
            </div>

        </>
    )
}

export default App
