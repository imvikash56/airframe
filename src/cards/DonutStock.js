import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
import { Card, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const DonutStock = ({ Title, totalStocks }) => {
  return (
    <Card className='marginBottom' >
      <CardBody >
        <Row >
          <Col>
            <h5 className='fw-bolder'>{Title}</h5>
            <p className='card-text line-ellipsis'>{totalStocks}</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DonutStock
// ** PropTypes
DonutStock.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired
}
