import './App.css';
import GameBoard from './GameBoard/GameBoard';
import {useState} from 'react';

function App() {
    const [fields, setFields] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

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
        <div className="App">
            <GameBoard fields={fields} handleClick={handleClick} />
        </div>
    );
}

export default App;
