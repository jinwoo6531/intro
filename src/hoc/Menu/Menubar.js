import React from 'react'
import styled from 'styled-components';
import MenuButton from "./MenuButton";

const Menu = styled.div`
    position:fixed;
    display:flex;
    justify-content: space-between;
    bottom:0;
    width:560px;
    height:130px;
    background-color: gray;
    left:50%;
    padding:15px 30px;
    padding-bottom:10px;
    transform: translateX(-50%);
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    
`;


function Menubar(props) {
  const  menus = [
        {
            icon: 'user',
            color: 'black',
            text: 'Intro'

        },
        {
            icon: 'react',
            color: '#5CD3F3',
            text: 'ReactJS'
        },
        {
            icon: 'node',
            color: "#87BF00",
            text: 'NodeJS'
        },
        {
            icon: 'coffee',
            color: "#DE6800",
            text: 'FullStack'
        },
    ]

    const renderMenus = (arr) => {
        return arr.map((item,index) => (
             <MenuButton
                    index={index}
                    showPage={props.showPage}
                    key={index}
                    icon={item.icon} 
                    color={item.color}
                    text={item.text}
            />
        ))
    }

    return (
        <Menu>            
            {renderMenus(menus)}
        </Menu>
    )
}

export default Menubar
