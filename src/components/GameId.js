import {useEffect, useRef, useState} from 'react';
import {Col, Grid, Row} from '@zendeskgarden/react-grid';
import {Field, Input} from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { TooltipModal } from '@zendeskgarden/react-modals';

const GameId = ({gameId, setGameId}) => {
    const [showInput, setShowInput] = useState(false);
    const [userInput, setUserInput] = useState('');
    const buttonRef = useRef(null);
    const [referenceElement, setReferenceElement] = useState(null);

    const openInput = () => {
        setShowInput(true);
    };

    const onChange = (event) => {
        setUserInput(event.target.value);
    };

    const submitAndClose = (event) => {
        if (event.key === 'Enter') {
            window.location.pathname = userInput;
            // event.preventDefault();
            // setGameId(userInput);
            // setShowInput(false);
        }
    };

    const copyLink = () => {
        if (window.location.pathname.slice(1)) {
            navigator.clipboard.writeText(window.location);
        } else {
            navigator.clipboard.writeText(`${window.location}${gameId}`);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setReferenceElement(null);
        }, 5000);
    }, [referenceElement]);

    useEffect(() => {
        setGameId(gameId);
    }, []);

    return (
        <Grid>
            <Row justifyContent='center'>
                <Col sm={5}>
                    <h2 className='text-2xl inline-block pb-0'>
                        Game ID: {gameId}
                    </h2>
                </Col>
            </Row>
            <Row justifyContent='center'>
                <Col xs={12} sm={'auto'}>
                    {!showInput && <Button isBasic onClick={openInput}>Change Game ID</Button>}
                    {showInput && (
                        <Field className='inline-block px-2.5' style={{top: '-7px'}}>
                            <Input onChange={onChange} onKeyDown={submitAndClose}
                                style={{fontSize: '1rem', maxWidth: '120px'}} isCompact />
                        </Field>
                    )}
                </Col>
                <Col xs={12} sm={'auto'}>
                    <Button className='mb-2'
                        isBasic ref={buttonRef}
                        onClick={() => {
                            copyLink();
                            setReferenceElement(buttonRef.current);
                        }}
                    >
                        Copy a shareable link
                    </Button>
                    <TooltipModal
                        referenceElement={referenceElement}
                        onClose={() => setReferenceElement(null)}
                        placement='top'
                    >
                        <TooltipModal.Title>Link copied!</TooltipModal.Title>
                        <TooltipModal.Body>Now challenge a friend to a game!</TooltipModal.Body>
                    </TooltipModal>
                </Col>
            </Row>
        </Grid>
    );
};

export default GameId;
