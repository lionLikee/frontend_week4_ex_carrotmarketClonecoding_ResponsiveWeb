import React, { useEffect } from 'react';

import './Carrotmarket_Desktop.css';
import './Carrotmarket_Iphone.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logopicture from './logo.png';

export function CarrotmarketHeader(){

    /*
        const toggleBtn1=document.querySelector('.navbar_toggleBtn');
        const menu=document.querySelector('.nav');

        const toggleBtn2=document.querySelector('.magnifying_glassBtn');
        const inputText=document.querySelector('.inputFind');
        
        const cancelBtn=document.querySelector('.cancelBtn');

        //toggleBtn을 클릭했을때 menu가 active상태가 되도록
        toggleBtn1.addEventListener('click',()=>{
            menu.classList.toggle('active');
        });

        toggleBtn2.addEventListener('click',()=>{
            inputText.classList.toggle('active');
        });

        cancelBtn.addEventListener('click',()=>{
            inputText.classList.remove('active');
        });
    */

    /*위에처럼 그냥 작성했을시에는 새로고침했을때 오류가 발생*/
    /*이를 해결하기 위해 useEffect 도입  -> 근데 아직 사용방법을 완벽히는 모르겠음...*/
    /*토글 버튼들에 대한 이벤트를 발생시키기 위한 작업*/
    useEffect(() => {
        const toggleBtn1 = document.querySelector('.navbar_toggleBtn');
        const menu = document.querySelector('.nav');
        const toggleBtn2 = document.querySelector('.magnifying_glassBtn');
        const inputText = document.querySelector('.inputFind');
        const cancelBtn = document.querySelector('.cancelBtn');

        toggleBtn1.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        toggleBtn2.addEventListener('click', () => {
            inputText.classList.toggle('active');
        });

        /*취소 버튼을 눌렀을때 active를 꺼주기*/
        cancelBtn.addEventListener('click', () => {
            inputText.classList.remove('active');
        });

        // cleanup 함수를 반환하여 이벤트 핸들러를 제거
        return () => {
            toggleBtn1.removeEventListener('click', () => {
                menu.classList.toggle('active');
            });

            toggleBtn2.removeEventListener('click', () => {
                inputText.classList.toggle('active');
            });

            cancelBtn.removeEventListener('click', () => {
                inputText.classList.remove('active');
            });
        };
    }, []); // useEffect가 처음 한 번만 실행되도록 빈 배열을 전달

    return(
        <div className="header">
            <a href="#">
                <div className="logo">
                    <img className="logo_pic"  alt="carrot_logo" src={logopicture} />
                </div>
            </a>

            <ul className="nav">
                <li><a href="#">중고거래</a></li>
                <li><a href="#">동네업체</a></li>
                <li><a className="orange_alba" href="#">알바</a></li>
                <li><a href="#">부동산</a></li>
                <li><a href="#">중고차 직거래</a></li>
            </ul>

            <a href="#" className="navbar_toggleBtn">
                <FontAwesomeIcon icon={faBars} />
            </a>

            <a href="#" className="magnifying_glassBtn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>


            <div className="inputFind">
                <input type="text" className="findInput" placeholder=" 물품이나 동네를 검색해보세요"></input>
                <button className="cancelBtn">취소</button>
            </div>

            <div className="chat">
                <button className="beginchatBtn">채팅하기</button>
            </div>
                
        </div>
        );
}