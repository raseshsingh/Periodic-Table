import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonSlide} from "@ionic/react";


import '../theme/variables.css';
import '../theme/bs.css';

class Slide extends Component {

    render() {
        const {name, img, type, sign, shadow} = this.props;
        return (
            <IonSlide>
                <div className="slide text-left mb-7 position-relative"
                     style={{backgroundImage: `url(${img})`, boxShadow: `${shadow}`}}>
                    <div className="position-absolute bottom-2 m-4">
                        <span
                            className={'text-left display-4 text-white p-3 mb-4 bg-white-light rounded-my d-inline-block'}>
                            {sign}
                        </span>
                        <p className="type p-0 m-0">
                            {type}
                        </p>
                        <h3 className="text-white p-0 m-0 display-4">
                            {name}
                        </h3>
                    </div>
                </div>
            </IonSlide>
        );
    }
}

export default Slide;
