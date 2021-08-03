import React from "react";
import CloseButton from '../Button/Close_Button';
import ReactDOM from "react-dom";
import './style.css'


interface ModalProps {
    showModal?: boolean;
    onClose(): void;
}

class Modal extends React.Component<ModalProps> {
    root: HTMLElement;
    el: HTMLDivElement;
    

    constructor(props: ModalProps) {
        super(props);
        this.root = document.getElementById('root') as HTMLElement;
        this.el = document.createElement('div');
       
    }

    componentDidMount(){
        this.root.append(this.el);
    }

    componentWillUnmount(){
        this.root.removeChild(this.el)
    }

    handdleCloseModal = () => {
        this.props.onClose();
    }

    modalPreventPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    }


    render() {
        const { showModal } = this.props;
        const WEEK = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
        const MESSAGES = ["Keep up, it will be a log week" , "The second day of the week, still a lot of things to do" , "The middle of the week, not bad, hah?", "Wow, time flies, keep pushing", "Finally, let's prepare our coctails", "Now it's time to relax", "Enjoy the last day of the weekend before the next week"]
        const dayAndMessage: any = [];
        WEEK.forEach(function(element, i) {
            if(new Date().toLocaleString('en-us', {  weekday: 'long' }) === element){
                dayAndMessage.push(element);
                dayAndMessage.push(MESSAGES[i]);
            }
        })

        const Text = "Close";

        const modalUI = ReactDOM.createPortal(
            <div className="modal-container" onClick = {this.modalPreventPropagation} >
                <div onClick={this.handdleCloseModal} className="modal-overlay"/>
                <div className="modal-body">
                    <h3> Modal </h3>
                    <p>It's {dayAndMessage[0]} today. {dayAndMessage[1]}</p>
                    <CloseButton buttonCallback = {this.handdleCloseModal} type="primary"> {Text} </CloseButton>
                </div>
            </div>,
            this.el
        )
        return showModal ? modalUI : null;
    }
}

export default Modal;