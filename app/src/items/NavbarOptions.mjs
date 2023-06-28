import React, { Component } from 'react'

export default class NavbarOptions extends Component {

    componentDidMount() {
        let nextBtn = document.getElementById('NextButton');
        let prevBtn = document.getElementById('PreviousButton');
        let navbarItemList = document.querySelector('.options-list');

        let scrollPosition = 0;
        const scrollStep = 200; // Set the desired scroll step

        if (nextBtn && prevBtn && navbarItemList) {

            nextBtn.addEventListener('click', () => {
                scrollPosition += scrollStep;
                navbarItemList.scrollTo({
                    top: 0,
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            });

            prevBtn.addEventListener('click', () => {
                scrollPosition -= scrollStep;
                navbarItemList.scrollTo({
                    top: 0,
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            });

        }
    }

    render() {

        return (
            <div>
                <nav className='navbar2 jc-center ai-center psn-fixed dis-flex'>
                    <img id='PreviousButton' src="assets\arrowBackward.svg" alt="Previous arrow" />
                    <ul className='options-list dis-flex list-none'>
                        <li>Sports</li>
                        <li>Crime</li>
                        <li>Economics</li>
                        <li>Geography</li>
                        <li>Space</li>
                        <li>War</li>
                        <li>Politics</li>
                        <li>Celebrities</li>
                        <li>Crypto</li>
                        <li>Programming</li>
                        <li>Programming</li>
                        <li>Programming</li>
                        <li>Programming</li>
                    </ul>
                    <img id='NextButton' src="assets\arrowForward.svg" alt="Next arrow" />
                </nav>
            </div>
        )
    }
}
