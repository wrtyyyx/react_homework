import {useState} from "react";

export function EventListener() {
    function HandlerClick(){
        alert('Нажали')
    }
    const [iter,setIter] = useState(0)
    return (
        <>
            <button disabled={true} onClick={HandlerClick}> Нажми</button>
            <h2> Кнопка нажата : {iter} раз</h2>
            <button onClick={() => setIter(iter + 1)}>++++ Кнопка нажата : {iter} раз ++++</button>
            <button onClick={() => setIter(iter - 1)}> ---- Кнопка нажата : {iter} раз ----</button>
        </>
    )
}