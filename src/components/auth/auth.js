import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { authReq } from '../../requests'

export const WithAuth = ({component, elseComponent}) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        authReq('GET', '/user/me')
            .then(data => {console.log(data?.data?._id); setUser(data?.data)})
    }, [])

    return <div>
        {user?._id ? component : elseComponent ?? navigate('/signIn')}
    </div>
}