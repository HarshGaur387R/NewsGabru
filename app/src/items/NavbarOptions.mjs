import React, { Component} from 'react';

export default class NavbarOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollStep: 200,
        };
        this.navbarItemListRef = React.createRef();
    }

    handleNextClick = () => {
        const navbarItemList = this.navbarItemListRef.current;
        navbarItemList.scrollTo({
            top: 0,
            left: navbarItemList.scrollLeft + this.state.scrollStep,
            behavior: 'smooth',
        });
    };

    handlePrevClick = () => {
        const navbarItemList = this.navbarItemListRef.current;
        navbarItemList.scrollTo({
            top: 0,
            left: navbarItemList.scrollLeft - this.state.scrollStep,
            behavior: 'smooth',
        });
    };

    render() {
        return (
            <div>
                <nav className="navbar2 jc-center ai-center psn-fixed dis-flex">
                    <img
                        id="PreviousButton"
                        src="assets\arrowBackward.svg"
                        alt="Previous arrow"
                        onClick={this.handlePrevClick}
                    />
                    <ul className="options-list dis-flex list-none" ref={this.navbarItemListRef}>
                        <li>All</li>
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
                    <img id="NextButton" src="assets\arrowForward.svg" alt="Next arrow" onClick={this.handleNextClick} />
                </nav>
            </div>
        );
    }
}
