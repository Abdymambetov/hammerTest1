import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HumbergerMenu from '../HumbergerMenu'
import { getUsersAction } from '../../redux/actions/UsersAction'
import ClientsCard from '../../components/clientsCard/ClientsCard'
import classes from './Clients.module.css'
import { Box, CircularProgress } from '@mui/material'
function ClientsPage() {
    const {page, users, load} = useSelector(state => state.person)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersAction())
    }, [page])
  return (
    <div>
        <HumbergerMenu/>
        
        {page && (
            <div className={classes.card_block}>
                <div className={classes.card_information}>
                    <div className={classes.card_block_id}>
                        <span className={classes.info_name}>id</span>
                        <span>User</span>
                    </div>
                    <div className={classes.personal_data}>
                        <span className={classes.info_name}>Email</span>
                        <span className={classes.info_name}>City</span>
                        <span className={classes.info_name}>Street</span>
                        <span className={classes.info_name}>Zip-code</span>
                    </div>
                </div>
                {users.map(item => (
                    load ?
                    <Box><CircularProgress/></Box>
                    :
                    <ClientsCard item={item}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default ClientsPage