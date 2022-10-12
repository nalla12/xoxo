import {Col, Grid, Row} from '@zendeskgarden/react-grid';
import {Field, Input} from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import {useEffect, useState} from 'react';

const GameId = ({gameId, setGameId}) => {
    const [showInput, setShowInput] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleClick = () => {
        setShowInput(true);
    };

    const onChange = (event) => {
        setUserInput(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setGameId(userInput);
            setShowInput(false);
        }
    };

    useEffect(() => {
        setGameId(gameId);
    }, []);

    return (
        <Grid>
            <Row justifyContent='center'>
                <Col sm={5}>
                    <h2 className='text-2xl pb-4'>Game ID: {gameId}</h2>
                    {!showInput && <Button isBasic onClick={handleClick}>Change Game ID</Button>}
                    {showInput && (
                        <Field>
                            <Input onChange={onChange} onKeyDown={onKeyDown} />
                        </Field>
                    )}
                </Col>
            </Row>
        </Grid>
    );
};

export default GameId;