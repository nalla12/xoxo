import './App.css';
import GameBoard from './GameBoard/GameBoard';
import {useEffect, useState} from 'react';
import GameId from './GameId';
import {writeGameData} from '../services/firebase/database';

const randomId = Date.now().toString(36).slice(2);

function App() {
    const [fields, setFields] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [asString, setAsString] = useState('');
    const [gameId, setGameId] = useState(randomId);

    useEffect(() => {
        const gameString = JSON.stringify(fields);
        setAsString(gameString);
        writeGameData(gameId, gameString);
    }, [fields]);

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
