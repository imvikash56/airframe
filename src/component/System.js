import React from 'react'
import Sidebar from '../sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Bar from '../graph/Bar'
import Bar1 from '../graph/Bar1';
import Bar2 from '../graph/Bar2';
import StepLineChart from '../graph/StepLineChart'
import Graphww from '../graph/WeightAge'
import Specification from '../graph/specification'
import { Row, Col, Card, CardTitle } from 'reactstrap'
export default function specification() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            System
            <div>
              <Row>
                <Col lg='4' md='6' xs='12'>
                  <Card>
                  <CardTitle>Market price</CardTitle>
                  <p>2585</p>
                    <Bar />
                  </Card>
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Card>
                  <CardTitle>Weightage</CardTitle>
                  <p>74%</p>
                    <Bar1 />
                  </Card>
                </Col>
                <Col lg='4' md='6' xs='12'>
                  <Card>
                  <CardTitle>Specifications</CardTitle>
                  <p>45 MB</p>
                    <Bar2 />
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg='4' md='6' xs='12'>
                <CardTitle>Market Price</CardTitle>
                <p>34 MB</p>
                  <StepLineChart />
                </Col>
                <Col lg='4' md='6' xs='12'>
                <CardTitle>Weightage</CardTitle>
                <p>24 %</p>
                  <Graphww />
                </Col>
                <Col lg='4' md='6' xs='12'>
                <CardTitle>Specification</CardTitle>
                <p>34 MB</p>
                  <Specification />
                </Col>
              </Row>
            </div>

          </Typography>

        </Box>
      </Box>

    </>

  )
}
