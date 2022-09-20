import React,{FC} from "react";
import Head from "next/head";
import Link from "next/link";
import _ from 'lodash';
import { NavbarProps } from "@customTypes/app/NavBar";

export const NavBar:FC<NavbarProps> = ({currentPage}) => {
    return (
        <>
    <Head>
      <title>{_.capitalize(currentPage)}</title>
    </Head>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="NavBar" data-testid="navbar">
    <div className="container-fluid">
      <Link href="/">
      <a className="navbar-brand">RZLT</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar-items">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <Link href="/search">
            <a className={currentPage == 'search' ? "nav-link active" : "nav-link"}  aria-current="page">Search</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/history">
            <a className={currentPage == 'history' ? "nav-link active" : "nav-link"}  aria-current="page">History</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 </>
)
}
