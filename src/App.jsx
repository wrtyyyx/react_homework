import './App.css'
import {useEffect, useState} from "react";
import Header from "./components/Header/Header.jsx";
import sunglasses from './img/sunglasses.png'
import basket from './img/basketball.png'
import joy from './img/joy.png'
import male from './img/male-technologist.png'
import tired from './img/tired_face.png'
import EmojiList from "./components/EmojiList/EmojiList.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import RenderResult from "./components/RenderResult/RenderResult.jsx";

function App() {
    const [emojis, setEmojis] = useState([
        {emoji: basket, count: 0},
        {emoji: joy, count: 0},
        {emoji: male, count: 0},
        {emoji: tired, count: 0},
        {emoji: sunglasses, count: 0}
    ])
    const [winner, setWinner] = useState(null)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (winner) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [winner]);
    const clickHandler = (index) => {
        setEmojis((prevEmojis) =>
            prevEmojis.map((item, i) =>
                i === index ? {...item, count: item.count + 1} : item
            )
        );
    };
    const resetPoints = () => {
        setEmojis(emojis.map((item) => (
            {...item, count: 0}
        )))
        setWinner(null)
    }
    const result = () => {
        const maxCount = Math.max(...emojis.map((item) => item.count))
        if (maxCount === 0) {
            alert('Chose some emoji!!!')
            return;
        }
        const maxEmoji = emojis.find(item => item.count === maxCount);
        setWinner(maxEmoji)
    }


    return (
        <>
            <Header/>
            <div className='container'>

                <EmojiList emojis={emojis} onClick={clickHandler}/>

                <Buttons reset={resetPoints} result={result} disabledBtn={disabled}/>
                <RenderResult winner ={ winner}/>

            </div>


        </>
    )
}

export default App
