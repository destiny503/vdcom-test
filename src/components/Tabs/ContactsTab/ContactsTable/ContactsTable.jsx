import React, { useMemo, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MaterialReactTable from 'material-react-table'
import { CreateNewContact } from './CreateNewContact/CreateNewContact'
import {
  add,
  edit,
  deleteContact,
} from '../../../../redux/slices/contactsSlice'

import deleteImg from '../../../../assets/delete-button.svg'
import editImg from '../../../../assets/edit-button.svg'
import s from './ContactsTable.module.scss'

const ContactsTable = ({ createModalOpen, setCreateModalOpen }) => {
  const data = useSelector(state => state.contactsReducer.contacts)
  const dispatch = useDispatch()

  const columns = useMemo(
    () => [
      {
        header: 'Client ID',
        enableEditing: false,
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

  const handleCreateNewRow = values => {
    dispatch(add(values))
  }

  const handleSaveRow = async ({ exitEditingMode, values }) => {
    dispatch(edit(values))
    exitEditingMode()
  }

  const handleDeleteRow = useCallback(
    async row => {
      dispatch(deleteContact(row.original.id))
    },
    [dispatch]
  )

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        positionActionsColumn='last'
        initialState={{ density: 'compact' }}
        enableRowSelection
        enableColumnActions={false}
        enableColumnFilters={false}
        enableFullScreenToggle={false}
        enableHiding={false}
        enableDensityToggle={false}
        enableEditing={true}
        editingMode='modal'
        onEditingRowSave={handleSaveRow}
        renderRowActions={({ row, table }) => (
          <div className={s.box}>
            <div className={s.boxItem} placement='left' title='Edit'>
              <div
                className={s.boxItem}
                onClick={() => table.setEditingRow(row)}
              >
                <img src={editImg} alt='edit' />
              </div>
            </div>
            <div
              className={s.boxItemD}
              placement='right'
              title='Delete'
            >
              <div
                className={s.boxItem}
                color='error'
                onClick={() => handleDeleteRow(row)}
              >
                <img src={deleteImg} alt='delete' />
              </div>
            </div>
          </div>
        )}
      />
      <CreateNewContact
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  )
}

export default ContactsTable
