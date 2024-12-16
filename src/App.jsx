import './App.css'
import MyButton from "./components/MyButton.jsx";
import Profile from "./components/User.jsx";
import {LIST} from "./components/LIST.jsx";
import {EventListener} from "./components/EventListener.jsx";


function App() {


  return (
    <>
      <MyButton/>
        <Profile/>
        <LIST/>
        <EventListener/>
        <EventListener/>
    </>
  )
}

export default App
