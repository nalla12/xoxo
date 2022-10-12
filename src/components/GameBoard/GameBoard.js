import {Col, Grid, Row} from '@zendeskgarden/react-grid';

const GameBoard = ({fields, handleClick}) => {
    return (
        <div>
            <Grid className="pt-4">
                {fields.map((row, rowIndex) => (
                    <Row key={rowIndex} className="pb-4">
                        {row.map((col, colIndex) => (
                            <Col key={colIndex}>
                                <button
                                    className="h-20 w-full rounded-full shadow-black shadow-md bg-fuchsia-300"
                                    onClick={handleClick}
                                    value={col}
                                    data-id={`${rowIndex}-${colIndex}`}
                                >
                                    <span className="text-2xl" style={{color: '#403650'}}>{col[0]}</span>
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