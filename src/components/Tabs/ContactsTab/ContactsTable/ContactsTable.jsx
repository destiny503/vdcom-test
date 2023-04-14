import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import MaterialReactTable from 'material-react-table'

import deleteImg from '../../../../assets/delete-button.svg'
import editImg from '../../../../assets/edit-button.svg'
import './ContactsTable.module.scss'

const ContactsTable = () => {
  const data = useSelector(state => state.contactsReducer.contacts)

  const columns = useMemo(
    () => [
      {
        header: 'Client ID',
        accessorKey: 'id',
        size: 50,
      },
      {
        header: 'Client name',
        accessorKey: 'name',
        size: 50,
      },
      {
        header: 'TRN/PPSN',
        accessorKey: 'trn',
        size: 50,
      },
      {
        header: 'Year end',
        accessorKey: 'year',
        size: 50,
      },
      {
        header: 'ARD',
        accessorKey: 'ard',
        size: 50,
      },
      {
        header: 'Company number',
        accessorKey: 'companyId',
        size: 50,
      },
      {
        header: 'Email',
        accessorKey: 'email',
        enableSorting: false,
        enableColumnFilter: false,
        size: 50,
      },
      {
        header: 'Phone number',
        accessorKey: 'phone',
        enableSorting: false,
        enableColumnFilter: false,
        size: 50,
      },
      {
        header: 'Company address',
        accessorKey: 'companyAddress',
        enableSorting: false,
        enableColumnFilter: false,
        size: 50,
      },
    ],
    []
  )

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      initialState={{ density: 'compact' }}
      enableRowSelection
      enableColumnActions={false}
      enableColumnFilters={false}
      enableFullScreenToggle={false}
      enableHiding={false}
      enableDensityToggle={false}
      positionGlobalFilter='right'
      // actions={[
      //   {
      //     icon: deleteImg,
      //     tooltip: 'Delete User',
      //     onClick: (event, rowData) =>
      //       alert('You want to delete ' + rowData.name),
      //   },
      // {
      //   icon: editImg,
      //   tooltip: 'Edit User',
      //   onClick: (event, rowData) =>
      //     alert('You want to delete ' + rowData.name),
      // },
      // ]}
      // initialState={{ density: 'compact' }}
      // muiTablePaginationProps={{
      //   Component: subProps => {
      //     const {
      //       page,
      //       count,
      //       rowsPerPage,
      //       backIconButtonProps,
      //       nextIconButtonProps,
      //       showLastButton,
      //       getItemAriaLabel,
      //       showFirstButton,
      //       onPageChange,
      //       ...restSubProps
      //     } = subProps
      //     return <div>text</div>
      //   },
      // }}
    />
  )
}

export default ContactsTable
