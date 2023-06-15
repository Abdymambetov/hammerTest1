import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Clientscard.module.css'

function ClientsCard(props) {
    const {item} = props
    console.log(item);
  return (
    <Link to={`/${item?.id}`} style={{textDecoration: 'none'}}>
        <div className={classes.card_inner}>
            <div className={classes.card_block_id}>
                <span className={classes.info_name_id}>{item?.id}</span>
                <span>{item?.name}</span>
            </div>
            <div className={classes.personal_data}>
                <span className={classes.info_name}>{item?.email}</span>
                <span className={classes.info_name}>{item?.address?.city}</span>
                <span className={classes.info_name}>{item?.address?.street}</span>
                <span className={classes.info_name}>{item?.address?.zipcode}</span>
            </div>
        </div>
    </Link>
  )
}

export default ClientsCard