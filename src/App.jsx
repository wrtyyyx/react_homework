import './App.css'
import MyButton from "./components/MyButton.jsx";
import Profile from "./components/User.jsx";
import {LIST} from "./components/LIST.jsx";
import {EventListener} from "./components/EventListener.jsx";
import Todos from "./components/Todos.jsx";
import Avatar from "./components/Avatar.jsx";
import PackingList from "./components/PackingList.jsx";
import RenderList from "./components/RenderList.jsx";
import ListTodo from "./components/ListTodo.jsx";
import Form from "./components/Form.jsx";


function App() {


    return (
        <>

            <MyButton/>
            <Profile/>
            <LIST/>
            <EventListener/>
            <EventListener/>
            <Todos/>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
            <PackingList/>
            <RenderList/>
            <ListTodo/>
            <Form/>
        </>
    )
}

export default App
