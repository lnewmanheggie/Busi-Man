import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Dashboard() {

    return(
        <>
            <Navbar />
            <Header heading={'Dashboard'}/>
            <div className="container">
                <div className="notification is-danger">
                    <div class="box">
                        I'm in a box.
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                I'm in a box.
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                I'm in a box.
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                            I'm in a box.
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                            I'm in a box.
                            </div>
                        </div>
                    </div>

                    <div class="columns is-centered">
                        <div class="column is-one-quarter">is-one-quarter</div>
                        <div class="column is-one-quarter">is-one-quarter</div>
                        <div class="column is-one-quarter">is-one-quarter</div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Dashboard;