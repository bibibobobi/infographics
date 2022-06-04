import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from './side-menu';
const MenuWrapper = styled.button`
  width: 18px;
  border: none;
  background-color: transparent;
  margin: 20px 17px 0 auto;
  padding: 0;
  transform: ${(props) => (props.show ? `rotate(90deg)` : '')};
  transition: transform 0.15s linear;
  @media (min-width: 861px) {
    display: none;
  }
  cursor: pointer;
  .line {
    height: 1.5px;
    color: black;
    margin: 4px 0;
    background-color: red;
  }
`;

export default function ThreeLineMenu() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <React.Fragment>
      <MenuWrapper
        onClick={() => {
          setShowSideMenu((showSideMenu) => !showSideMenu);
        }}
        show={showSideMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </MenuWrapper>
      <SideMenu show={showSideMenu} />
    </React.Fragment>
  );
}
