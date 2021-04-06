import React from 'react';
import { Link } from 'react-router-dom';

function LoginSignupHeader(props) {

    const styles = {
        h1: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#219ebc'
        },
        link: {
            fontSize: '1.3rem',
            color: '#fb8500'
        }
    }

    return (
        <nav className="navbar is-flex is-justify-content-space-between" role="navigation" aria-label="main navigation">
            <div className='p-4'>
                <h1 style={styles.h1}>Busi-Man</h1>
            </div>
            <div className='p-4'>
                <Link style={styles.link} to={props.linkTo || '/'}>
                    {props.linkText}
                </Link>
            </div>

        </nav>
    )
}

export default LoginSignupHeader;