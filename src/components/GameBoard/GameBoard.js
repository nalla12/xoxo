import React, {useState} from 'react';
import {Col, Grid, Row} from '@zendeskgarden/react-grid';

const GameBoard = () => {
    const [fields, setFields] = useState([
        [[''], [''], ['']],
        [[''], [''], ['']],
        [[''], [''], ['']],
    ]);

    const handleClick = (event) => {
        const val = event.target.value;
        switch (val) {
            case '':
                setFields('X');
                break;
            case 'X':
                setFields('O');
                break;
            case 'O':
                setFields('');
                break;
            default:
                setFields('X');
                break;
        }
    };

    return (
        <div>
            <Grid className="pt-4">
                {fields.map((row, index) => (
                    <Row key={index} className="pb-4">
                        {row.map((col, index) => (
                            <Col key={index}>
                                <button
                                    className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"
                                    onClick={handleClick}
                                    value={col[0]}
                                >
                                    {col[0]}
                                </button>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Grid>
        </div>
    );
};

export default GameBoard;
