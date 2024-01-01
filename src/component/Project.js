import React from 'react'
import Sidebar from '../sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DonutStock from '../cards/DonutStock';
import Donutday from '../cards/Donutday';
import { Row, Col, Card, CardTitle } from 'reactstrap'
import PieChart from '../graph/PieChart'
import CardTransactions from '../graph/StateCard'
import Timeline from '../timeline/Timeline'
import List from '../graph/list'
import Projects from '../graph/Projects'

export default function Project() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Typography paragraph>
            Project
            <div>

              <Row className='match-height'>
                <Col lg='2' xs='12'>
                  <Donutday day='info' totalNo='57.81' />
                </Col>
                <Col lg='2' xs='12'>
                  <DonutStock Title='stocks' totalStocks='7' />
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Card>
                    <CardTitle >Stock Price</CardTitle>
                    <PieChart />
                  </Card>
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <CardTransactions />
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Timeline />
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Card className='card-transaction'>
                  <CardTitle >Task</CardTitle> 
                    <List />
                  </Card>
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Projects />
                </Col>
              </Row>
            </div>


          </Typography>

        </Box>
      </Box>

    </>

  )
}
