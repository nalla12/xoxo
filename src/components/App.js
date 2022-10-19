import './App.css';
import {useEffect, useRef, useState} from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {firebaseAuth, subscribeCurrentGame, writeGameData} from '../services/firebase/database';
import GameBoard from './GameBoard/GameBoard';
import GameId from './GameId';
import ChooseLetter from './ChooseLetter';

const randomId = Date.now().toString(36).slice(2);

function App() {
    const firstRender = useRef(true);
    const [fields, setFields] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [gameId, setGameId] = useState(randomId);
    const [selectedLetter, setSelectedLetter] = useState('X');
    const currentPath = window.location.pathname;

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
        subscribeCurrentGame(gameId, handleDbCurrentGame);
    }, [gameId]);

    useEffect(() => {
        !!currentPath.slice(1) && setGameId(currentPath.slice(1));

        firebaseAuth()
            .then((res) => console.log('Auth:', res))
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
                    newFields[rowIndex][colIndex] =
                        selectedLetter === 'X'
                            ? 'X'
                            : selectedLetter === 'O'
                                ? 'O'
                                : '';
                    return newFields;
                });
                break;
            case 'X':
                if (selectedLetter === 'X') {
                    setFields(() => {
                        newFields[rowIndex][colIndex] = '';
                        return newFields;
                    });
                }
                break;
            case 'O':
                if (selectedLetter === 'O') {
                    setFields(() => {
                        newFields[rowIndex][colIndex] = '';
                        return newFields;
                    });
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className='App h-screen grid gap-4 content-center'>
            <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: false }}>
                <GameId gameId={gameId} setGameId={setGameId} />
                <ChooseLetter selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} />
                <GameBoard fields={fields} handleClick={handleClick} />
            </ThemeProvider>
        </div>
    );
}

export default App;
