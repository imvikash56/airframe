import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

const DataTablesBasic = () => {
   const Columns = [
    {
      name: 'Channel',
      sortable: true,
      maxWidth: '20px',
      selector: row => row.channel
    },
 
    {
      name: 'Sum of Session',
      sortable: true,
      minWidth: '20px',
      selector: row => row.sum
    },
    {
      name: 'Chrges',
      sortable: true,
      minWidth: '20px',
      selector: row => row.change
    },
 
 
  ]
  const data = [
    {
      sum: '817',
      channel:'Direct',
      change: 23,
     
    },
    {
      stosumck: '512',
      channel:'Organic Search',
      change: 57,
     
    },
    {
      sum: '978',
      channel:'Social Media',
      change: 57,
     
    }
  ]

  return (
      <div >
        <DataTable
          data={data}
          columns={Columns}
          className='react-dataTable'
        />
      </div>
 
  )
}

export default DataTablesBasic
