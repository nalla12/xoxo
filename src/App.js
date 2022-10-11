import './App.css';
import {Col, Grid, Row} from '@zendeskgarden/react-grid';

function App() {


    return (
        <div className="App">
            <Grid>
                <Row>
                    <Col>
                        <button className="h-20 w-full bg-amber-300 border-2 border-solid border-amber-400">Hej</button>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default App;
