import {Col, Grid, Row} from '@zendeskgarden/react-grid';
import {Field, Input} from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import {useEffect, useState} from 'react';

const GameId = ({gameId, setGameId}) => {
    const [showInput, setShowInput] = useState(false);
    const [userInput, setUserInput] = useState('');

    const openInput = () => {
        setShowInput(true);
    };

    const onChange = (event) => {
        setUserInput(event.target.value);
    };

    const submitAndClose = (event) => {
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
                    <h2 className='text-2xl inline-block pb-4'>
                        Game ID: {gameId}
                    </h2>
                    {!showInput && <Button isBasic onClick={openInput}>Change Game ID</Button>}
                    {showInput && (
                        <Field className='inline-block px-2.5' style={{top: '-7px'}}>
                            <Input onChange={onChange} onKeyDown={submitAndClose}
                                style={{maxWidth: '120px'}} isCompact />
                        </Field>
                    )}
                </Col>
            </Row>
        </Grid>
    );
};

export default GameId;
