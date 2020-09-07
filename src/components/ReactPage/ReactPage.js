import React from 'react'
import styled from "styled-components";
import { FlexBox } from "../reusuable/styles";

const IntroContainer = styled.div`
  
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 620px;
  height: 420px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  .label {
    font-weight: bold;
    text-align: right;
  }
  .me {
    width: 90%;
    height: 250px;
  }
  .job {
    color: #aaa;
    font-size: 18px;
    letter-spacing: 1.5px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 90%;
  }
`;


function ReactPage() {
    return (
        <>
        <img src={require("./images/nav.PNG")} alt="nav"/>
        <IntroContainer>            
            <nav style={{textAlign:"center"}}>
                <div>
                    <h1>반응형 NAV 만들기</h1>                    
                </div>
            </nav>
        <br/>
            <section>
                <div>
                    <h2>1. UI 작성(태그 작성)</h2>
                    <h2>2. fas fa-bars 햄버거 버튼까지 생성</h2>
                    <h2>3. font-family: "Source Sans Pro"; 구글에서 폰트생성</h2>
                    <h2>4. @media 쿼리 파악</h2>
                </div>
            </section>
            
        </IntroContainer>
        </>
    )
}

export default ReactPage
