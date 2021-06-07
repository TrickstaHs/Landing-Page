import React from 'react'
import './navbar.css'
function ClickMe(){
  alert('TESTADO com sucesso');
}

function Navbar({acao}) {
  return (

    <header className="NaveHeader" >
    <div className= {acao ? 'NavHeader2':'NavHeader'} >
        
            <div className="NavLogo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Black_Mesa_logo.svg/300px-Black_Mesa_logo.svg.png"/>
                <li> <a href="#"> Banco Mesa </a></li>
            </div>
            <div className="Menu">
            <ul>
                <li><a href="#"> Para Você </a></li>
                <li> <a href="#"> Venha Conhecer </a></li>
                <li> <a href="#"> Carreiras </a></li>
                <li> <a href="#"> Ajuda </a></li>
                <div className="btn">
                <li > <button class="req" href="#" onClick={ClickMe}>Peça o seu</button></li>
                </div>
            </ul>
            </div>
        
   </div>
   </header>
  );
}

export default Navbar;
