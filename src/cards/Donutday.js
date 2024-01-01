// ** Third Party Components
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
import { Card, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Donutday = ({ day, totalNo }) => {
  return (
    <Card className='marginBottom' >
      <CardBody >
        <Row >
          <Col>
            <h5 className='fw-bolder'>{day}</h5>
            <p className='card-text line-ellipsis'>{totalNo}</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Donutday

// ** PropTypes
Donutday.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired
}
