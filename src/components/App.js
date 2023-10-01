import '../styles/app.css';
import {useEffect, useMemo, useRef, useState} from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {Col, Grid, Row} from '@zendeskgarden/react-grid';
import {firebaseAuth, subscribeCurrentGame, writeGameData} from '../services/firebase/database';
import GameBoard from './GameBoard';
import GameId from './GameId';
import SwitchLetter from './SwitchLetter';
import ColorChanger from './ColorChanger';
import {calculateWinner} from '../helpers/game-helpers';
import {Button} from '@zendeskgarden/react-buttons';

const randomId = Date.now().toString(36).slice(2);

function App() {
    const firstRender = useRef(true);
    const [fields, setFields] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [gameId, setGameId] = useState(randomId);
    const [selectedLetter, setSelectedLetter] = useState('X');
    const [primaryColor, setPrimaryColor] = useState('#F0ABFC');
    const currentPath = window.location.pathname;
    const winner = useMemo(() => calculateWinner(fields), [fields]);

    const handleDbCurrentGame = (gameData) => {
        !!gameData && setFields(JSON.parse(gameData));
    };

    useEffect(() => {
        if (!firstRender.current) {
            const gameString = JSON.stringify(fields);
            writeGameData(gameId, gameString);
        }
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
        if (winner) return;

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

    const handleReset = () => {
        setFields([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
    };

    return (
        <div className='App h-screen grid gap-4 content-center'>
            <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: false }}>
                <Grid>
                    <Row><Col>
                        <GameId gameId={gameId} setGameId={setGameId} />
                    </Col></Row>
                    <Row className='mb-4'><Col>
                        <ColorChanger primaryColor={primaryColor} setPrimaryColor={setPrimaryColor} />
                    </Col></Row>
                    <Row className='mb-4'><Col>
                        <SwitchLetter
                            selectedLetter={selectedLetter}
                            setSelectedLetter={setSelectedLetter}
                            primaryColor={primaryColor}
                        />
                    </Col></Row>
                    {winner && <Row className='mb-4'><Col>
                        <h2 className='text-2xl'>Winner: {winner}</h2>
                        <Button isBasic onClick={handleReset}>
                            Reset game
                        </Button>
                    </Col></Row>}
                    <Row><Col>
                        <GameBoard fields={fields} handleClick={handleClick} bgColor={primaryColor} />
                    </Col></Row>
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default App;
