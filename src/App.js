import './App.css';
import {useState} from "react";
import {Col, Grid, Row} from "@zendeskgarden/react-grid";

function App() {
    const [bla, setBla] = useState(false);
    const Value = () => {
        return (bla ? 'x' : 'o');
    };
    const handleClick = () => {
        setBla(!bla);
        console.log(bla)
    };

    return (
        <div className="App">
            <Grid>
                <Row>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                    <Col>
                        <button onClick={handleClick}
                                className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400"><Value /></button>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default App;
