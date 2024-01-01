import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const StateCard = () => {
  const transactionsArr = [
    {
      title: 'Active Projects',
      color: 'light-primary',
      amount: '6',
    },
    {
      title: 'Open Tasks',
      color: 'light-success',
      amount: '4',
    },
    {
      title: 'Support Tickets',
      color: 'light-danger',
      amount: '15',
    },
    {
      title: 'Active Timers',
      color: 'light-warning',
      amount: '0',
   
    }
  ]

  const render = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
           
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>My States</CardTitle>
      </CardHeader>
      <CardBody>{render()}</CardBody>
    </Card>
  )
}

export default StateCard
