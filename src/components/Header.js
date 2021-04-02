import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
            <Link class="navbar-brand " to="/">SumitDesigns</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Search<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ToDo">ToDo</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
                </ul>
            </div>
            </nav>
            
        </div>
    )
}

export default Header
