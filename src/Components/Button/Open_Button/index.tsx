import React from 'react';
import "../style.css"


interface ButtonProps {
    type: "primary" | "default";
    buttonCallback(): void
}

class OpenButton extends React.Component<ButtonProps> {
    constructor(props: ButtonProps){
        super(props);

    }

    handdleModal = () => {
        this.props.buttonCallback()
    }

    render (){
        return(
            <button onClick={this.handdleModal} className={this.props.type}> Open Message </button>
        )
    }
}

export default OpenButton