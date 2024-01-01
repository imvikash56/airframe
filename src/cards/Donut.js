// ** Third Party Components
import PropTypes from 'prop-types'
import { Row, Col,CardTitle } from 'reactstrap';
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const Donut = ({time, replays, retry }) => {
  return (
    <Card  >
      <CardBody >
        <Row className='cardMargin'>
          <Col>
          <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h6 >Time</h6>
            <h5 className='mb-0 time'>{time}</h5>
          </div>
          <div>
            <h6>Replays</h6>
            <h5 className='mb-0 replays'>{replays}</h5>
          </div>
          <div>
            <h6>Retry</h6>
            <h5 className='mb-0 h1Color retry'>{retry}</h5>
          </div>
        </div>
          </Col>  
          <div >
          <CardTitle >Count of Activity Details</CardTitle>   
          </div>
           
        </Row>

      </CardBody>

    </Card>
  )
}

export default Donut

// ** PropTypes
Donut.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired
}
