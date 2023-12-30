"use client"
 import React, { Component } from 'react';
 import Image from 'next/image'
import menu from "../../img/menu.png"

 class MyComponent extends Component {

componentDidMount() {

}

  render() {
    function ok(){
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
    }
 return (
      <>    
        <div className="nav flex flex-row justify-between px-4 py-2 bg-gray-300">
            <div className="logo uppercase tracking-wider style font-bold bg-cyan-400 rounded px-2 py-1">better call nicola</div>
            <div className="menu h-8 w-8" onClick={ok}>
                <Image alt='o' src={menu}></Image>
            </div>
        </div>
        <div id="myDIV" className='hidden'>pp</div>

      </>
     );
   }
 }
 
 export default MyComponent;

