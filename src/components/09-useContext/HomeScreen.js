import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const userContext = useContext(UserContext);
    const {user} = userContext;
    console.log(userContext);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
