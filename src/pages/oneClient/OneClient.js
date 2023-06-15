import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneUserAction } from '../../redux/actions/UsersAction'
import { setIsOpen, setPage } from '../../redux/slices/UsersSlice';
import { CircularProgress, Box } from '@mui/material';
function OneClient() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()
    const {oneUser, load} = useSelector(state => state.person)
    useEffect(() => {
        dispatch(getOneUserAction(id))
    }, [])
    const navigate = useNavigate()

    const handleSaveChanges = async (param) => {
        setIsSaving(true);
        await axios({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/users/${id}/`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(param)
        })
        setIsSaving(false);

        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
          navigate('/')
          dispatch(setIsOpen())
          dispatch(setPage())
        }, 1000);
    };

    const changeUsername = ({target}) => {
        setUsername(target.value)
    }
    const changeName = ({target}) => {
        setName(target.value)
    }
    const param = {username, name}
  return (
    <div>
        {load 
            ? 
        (<div>loading...</div>)
            :   
        ( <span> {oneUser?.username} {oneUser.name}</span>
        )}
        <button onClick={() => navigate(-1)}>go back</button>
        <div>Введите сюда новые данные</div>
        <input type="text" placeholder='username'onChange={changeUsername}/>
        <input type="text" placeholder='name'onChange={changeName}/>
        <button onClick={() => handleSaveChanges(param)}>Save changes</button>
        {isSaving && <Box><CircularProgress/></Box>}
        {isSaved && <div>Saved! Returning to user list...</div>}
    </div>
  )
}

export default OneClient