import React, { Component } from 'react';

export default class NavbarOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollStep: 200,
            activeIndex: null
        };
        this.navbarItemListRef = React.createRef();
    }

    handleOnListItemCLick(index,value){
        this.setState({
            activeIndex : index
        })
        this.props.setCategory(value)
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
            'general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

        const listItems = items.map((item, index) => <li onClick={()=>this.handleOnListItemCLick(index,item)} className={this.state.activeIndex === index?'active':''} key={index}><button value={item} type='button'>{item}</button></li>);

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
