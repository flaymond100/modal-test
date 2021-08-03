import React from "react";
import OpenButton from '../Button/Open_Button';
import Modal from "../Modal";
import './style.css'

interface HomePageState {
    showModal: boolean;
}

class HomePage extends React.Component<{}, HomePageState> {
    node: HTMLDivElement | null | undefined;
    constructor(props: {}){
        super(props);
        this.state = {
            showModal: false
        }
    }


    handdleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handdleOpenModal = () => {
        this.setState({ showModal: true });
    }


    render() {
        const { showModal } = this.state;
        return (
            <div className="message-generator">
                <h1>Message Everyday</h1>
                <OpenButton buttonCallback = {this.handdleOpenModal} type="default" />
                <Modal onClose = {this.handdleCloseModal} showModal={showModal} />
            </div>
        )
    }
}

export default HomePage;