import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {

    const styles = {
        navbar: {
            backgroundColor:'#023047'
        },

        h1: {
            fontSize: '2rem',
            color: '#ffb703'
        },

        navbarMenu: {
            backgroundColor: '#8ecae6'
        },

        navbarItem: {
            color: '#ffb703'
        }
    }

    let history = useHistory();

    // Code from Bulma to make the navbar responsive
    useEffect(() => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      });

      const handleSignOut = () => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('company');
      }

    return(

        <nav className="navbar" role="navigation" aria-label="main navigation" style={styles.navbar}>
            <div className="navbar-brand">
                <h1 className="navbar-item" style={styles.h1}>Busi-Man</h1>

                <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" style={styles.navbarItem}></span>
                    <span aria-hidden="true" style={styles.navbarItem}></span>
                    <span aria-hidden="true" style={styles.navbarItem}></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {/* redirects back to current dashboard location */}
                    <div onClick={() => history.goBack()} className="navbar-item" style={styles.navbarItem}>
                        Back
                    </div>
                </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="#" className="navbar-link" style={styles.navbarItem}>
                                My Account
                            </a>
                            <div className="navbar-dropdown">
                            <Link to='/view-account' className="navbar-item">
                                View
                            </Link>
                            <Link to='/' className="navbar-item" onClick={handleSignOut}>
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;