import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="mb-5">
                <nav class="navbar navbar-expand-lg border-bottom navbar-light fixed-top bg-white pt-0 pb-0 mb-5">
                    <div class="container ">
                        <Link class="navbar-brand" to="/">
                            <img className="me-0 pe-0" src="/media/images/symbol.svg" alt="symbol" height="50"></img>
                            <img className="ms-0 ps-0" src="/media/images/hedgex-logo.svg" alt="HedgeX" height="50" />
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-lg-0">
                                <li class="nav-item nav-item1">
                                    <Link class="nav-link" aria-current="page" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/products">
                                        Products
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/pricing">
                                        Pricing
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/support">
                                        Support
                                    </Link>
                                </li>
                                <li class="nav-item dropdown fs-5">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="fa-solid fa-bars text-dark"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="/">
                                                Kite
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="/">
                                                Console
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="/">
                                                Kite connect
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="/">
                                                Coin
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
