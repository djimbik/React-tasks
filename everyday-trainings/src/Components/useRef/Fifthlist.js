import React, {useRef, useState} from 'react';

const Fifthlist = () => {
    const [songs, setSongs] = useState(['Ledger - my arms', 'skillet - comatose'])

    const inputSong = useRef(null)

    const addSongHandler = () => {
        setSongs(prevState => {
            return [...prevState, inputSong.current?.value]
        } )
    }

    return (
        <div>
            <input type="text" ref={inputSong}/>
            <button onClick={addSongHandler}>тык сюда</button>
            <ul>
                {songs.map((item,index) => <li key={index}>{item}</li>)}
            </ul>

        </div>
    );
};

export default Fifthlist;