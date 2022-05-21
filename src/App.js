import logo from './logo.svg';
import bootstrap from 'bootstrap';
import './App.css';
import { Link } from "react-router-dom";
import React from 'react';
import { Outlet } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Ucitaj from './Ucitaj.js';
function App() {
  return (
<>
<nav className='navigacija'>
<h1 className='App'>Smartphone Shop</h1>
  <Link className='button' to="/">Početna</Link>
  <br></br>
  <Link className='button' to="/dodaj">Dodaj</Link>
  </nav>
  <Outlet />
  
  <Table className="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Naziv</th>
      <th>Prozvodac</th>
      <th>Model</th>
      <th>Cijena</th>
      <th>Kolicina</th>
    </tr>
  </thead>
  <tbody>     
 <Ucitaj></Ucitaj>
</tbody></Table>
    
  </>
);
}

export default App;
