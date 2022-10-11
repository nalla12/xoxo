import React from 'react';
import {Col, Grid, Row} from '@zendeskgarden/react-grid';

const GameBoard = () => {
    const fields = [
        [['1'], ['2'], ['3']],
        [['4'], ['5'], ['6']],
        [['7'], ['8'], ['9']],
    ];

    const handleClick = (event) => {
        alert('You clicked on ' + event.target.value);
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
