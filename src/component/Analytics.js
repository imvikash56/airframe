import React from 'react'
import Sidebar from '../sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Row, Col, CardTitle } from 'reactstrap';
import Cards from '../cards/Cards'
import ChartArea from '../graph/ChartArea'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../graph/Chart'
import Table from './Table'
import SpendChart from '../graph/SpendChart'
import TraficPerformChart from '../graph/TraficPerformChart'
import Donut from '../cards/Donut'
import { Card } from 'reactstrap'
export default function Financial() {

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Typography paragraph>
                        Analytics
                        <Row>
                            <Col xl="8" md="6" xs="12">
                                <Cards />
                                <br></br>
                                <Row>
                                    <Card>
                                        <CardTitle >Count of SessionID and of Duration by LevelID</CardTitle>
                                        <Col xl="12" md="12" xs="12">
                                            <ChartArea />
                                        </Col>
                                    </Card>
                                    <Row>
                                        <Col xl="8" md="12" xs="12">
                                            <br></br>
                                            <Card>
                                                <Row>
                                                    <Col xl="12" md="12" xs="12">
                                                        <Table />
                                                    </Col>
                                                </Row>
                                            </Card>
                                            <br></br>
                                            <Row>
                                                <Card>
                                                    <Col xl="12" md="12" xs="12">
                                                        <TraficPerformChart />
                                                    </Col>
                                                </Card>
                                            </Row>
                                        </Col>
                                    
                                        <Col xl="4" md="12" xs="12">
                                            <br></br>
                                        <CardTitle >23 November 2023 </CardTitle>
                                            <SpendChart />
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                            <Col xl="4" md="6" xs="12">
                                <Card>
                                <CardTitle >INgame Per Day </CardTitle>
                                <Row>
                                    <Chart />
                                </Row>
                                </Card>
                                <br></br>
                                <Row>
                                    <Donut time='11585' replays='6' retry='409' />
                                </Row>
                            </Col>
                        </Row>
                    </Typography>
                </Box >
            </Box >
        </>
    )
}
