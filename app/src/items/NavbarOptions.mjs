import React, { Component } from 'react';

// On click save the index of clicked item into active index. And create a logic for li className . If active index is === li index than turn on the active class


export default class NavbarOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollStep: 200,
            activeIndex: null
        };
        this.navbarItemListRef = React.createRef();
    }

    handleOnListItemCLick(index){
        this.setState({
            activeIndex : index
        })
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

        const items = [
            'All', 'Sports', 'Crime', 'Economics', 'Geography', 'Space', 'War', 'Politics', 'Celebrities', 'Crypto', 'Programming' ];

        const listItems = items.map((item, index) => <li onClick={()=>this.handleOnListItemCLick(index)} className={this.state.activeIndex === index?'active':''} key={index}>{item}</li>);

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
                        {listItems}
                    </ul>
                    <img id="NextButton" src="assets\arrowForward.svg" alt="Next arrow" onClick={this.handleNextClick} />
                </nav>
            </div>
        );
    }
}
