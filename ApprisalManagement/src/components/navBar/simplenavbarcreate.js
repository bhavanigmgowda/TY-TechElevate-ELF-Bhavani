import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class SimpleNavBarCreate extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <NavLink to="/" id="text" className="navbar-brand text-light">Task Manager</NavLink>
                        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div id="my-nav" className="collapse navbar-collapse justify-content-end"> <NavLink to="/createUser" className="btn btn-outline-primary btn-sm font-weight-bold mr-2">Create Account</NavLink> </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default SimpleNavBarCreate
