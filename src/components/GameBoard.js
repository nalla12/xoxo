import {Col, Grid, Row} from '@zendeskgarden/react-grid';

const GameBoard = ({fields, handleClick, bgColor}) => {
    return (
        <Grid>
            <Row alignItems='center' justifyContent='center' style={{padding: '2rem'}}>
                <Col>
                    {fields.map((row, rowIndex) => (
                        <Row key={rowIndex} className='pb-4' justifyContent='center'>
                            {row.map((letter, colIndex) => (
                                <Col key={colIndex}>
                                    <button
                                        className='h-24 w-full
                                        shadow-neutral-600 drop-shadow-xl
                                        text-4xl font-bold text-violet-800'
                                        style={{backgroundColor: bgColor}}
                                        onClick={handleClick}
                                        value={letter}
                                        data-id={`${rowIndex}-${colIndex}`}
                                    >
                                        {letter}
                                    </button>
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Col>
            </Row>
        </Grid>
    );
};

export default GameBoard;
