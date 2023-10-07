import React from "react";
import styled from "styled-components";


const Navigation = styled.div`
background-color: #151515;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 10px 0 20px;
height: 40px;

.logo-container{
  width: 220px;
  img{
    width: 170px;
    height: auto;
  }
}

.nav-elements{
  color: white;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-right: 190px;

  li{
    list-style-type: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: font-size 0.3s ease;
  }

  li:hover{
    color: yellow;
    font-size: large;
    cursor: pointer;
}
}

 

.profile-container{
  width: 40px;
  height: 40px;
  align-items: center;
 display: flex;
 justify-content: center;
  img{
    width: 30px;
    height: auto;
    border-radius: 50px;
    border: 1px solid white;
  }
}


`

const NavBar = () => {
  return (
    <Navigation>
      <div className="logo-container">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="nav-elements">
        
          <li>Home</li>
          <li>Chat</li>
        
      </div>
      <div className="profile-container">
        <img src="/profile.png" alt="profile" />
      </div>
    </Navigation>
  );
};

export default NavBar;
