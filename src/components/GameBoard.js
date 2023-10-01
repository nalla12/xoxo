import {Col, Row} from '@zendeskgarden/react-grid';

const GameBoard = ({fields, handleClick, bgColor}) => {
    return (
        <>
            <Row alignItems='center' justifyContent='center'>
                <Col>
                    {fields.map((row, rowIndex) => (
                        <Row key={rowIndex} className='h-20 sm:h-28 pb-4' justifyContent='center'>
                            {row.map((letter, colIndex) => (
                                <Col key={colIndex} size={'auto'}>
                                    <button
                                        className='h-full w-16 sm:w-24
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
        </>
    );
};

export default GameBoard;
