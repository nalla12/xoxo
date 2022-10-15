import './App.css';
import {useEffect, useRef, useState} from 'react';
import {firebaseAuth, subscribeCurrentGame, writeGameData} from '../services/firebase/database';
import GameBoard from './GameBoard/GameBoard';
import GameId from './GameId';

const randomId = Date.now().toString(36).slice(2);

function App() {
    const firstRender = useRef(true);
    const [fields, setFields] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [gameId, setGameId] = useState(randomId);
    const handleDbCurrentGame = (gameData) => {
        !!gameData && setFields(JSON.parse(gameData));
    };

    useEffect(() => {
        if (!firstRender.current) {
            const gameString = JSON.stringify(fields);
            writeGameData(gameId, gameString);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields]);

    useEffect(() => {
        if (!firstRender.current) {
            subscribeCurrentGame(gameId, handleDbCurrentGame);
        }
    }, [gameId]);

    useEffect(() => {
        firebaseAuth()
            .then((res) => console.log('Firebase auth:', res))
            .catch((err) => console.error(err));

        firstRender.current = false;
    }, []);

    const handleClick = (event) => {
        const val = event.target.value;
        const rowIndex = event.target.dataset.id.split('-')[0];
        const colIndex = event.target.dataset.id.split('-')[1];
        let newFields = [...fields];

        switch (val) {
            case '':
                setFields(() => {
                    newFields[rowIndex][colIndex] = 'X';
                    return newFields;
                });
                break;
            case 'X':
                setFields(() => {
                    newFields[rowIndex][colIndex] = 'O';
                    return newFields;
                });
                break;
            case 'O':
                setFields(() => {
                    newFields[rowIndex][colIndex] = '';
                    return newFields;
                });
                break;
            default:
                setFields(() => {
                    newFields[rowIndex][colIndex] = 'X';
                    return newFields;
                });
                break;
        }
    };

    return (
        <div className='App h-screen grid gap-4 content-center'>
            <GameId gameId={gameId} setGameId={setGameId} />
            <GameBoard fields={fields} handleClick={handleClick} />
        </div>
    );
}

export default App;
