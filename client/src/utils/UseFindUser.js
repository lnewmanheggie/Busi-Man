import { useState, useEffect } from 'react';
import UserApi from './UserApi';

export default function useFindUser() {
    const [user, setUser] = useState(null);

    useEffect(()=> {
        function findUser() {
            UserApi.getUser()
            .then(res => {
                setUser(res.data.currentUser)
            })
            .catch(err => {
                console.log(err);
            })
        }
        findUser();
    }, [])

    return {
        user,
        setUser
    }
}