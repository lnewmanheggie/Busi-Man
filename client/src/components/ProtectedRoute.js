// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { UserContext } from './../utils/UserContext';
// import Loading from './../components/Loading';

// export default function PrivateRoute({ component: Component, ...rest }) {
//     <Route {...rest} render={props => {
//         const currentUser = authenticationService.currentUserValue;
//         if (!currentUser) {
//             // not logged in so redirect to login page with the return url
//             return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         }

//         // authorised so return component
//         return <Component {...props} />
//     }} />
// }

// export default function ProtectedRoute(props) {
//     const { user, isLoading } = useContext(UserContext);
//     console.log(user, isLoading);

//     const { component: Component, ...rest } = props;

//     if (isLoading) {
//         return <Loading />
//     }

//     if (user) {
//         return ( <Route {...rest} render={(props) =>(
//         <Component {...props} />)} />)
//     } else {
//         return <Redirect to='/' />
//     }
// }