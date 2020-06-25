import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonRow, IonCol, IonIcon, IonSlide, IonSlides} from "@ionic/react";


import '../theme/variables.css';
import '../theme/bs.css';

class Slide extends Component {

    render() {
        return (

            <IonSlide>
                <div className="slide text-left mb-7 position-relative">
                    <div className="position-absolute bottom-4 m-4">
                        <span
                            className={'text-left display-4 text-white p-3 mb-4 bg-white-light rounded-my d-inline-block'}>Ag</span>
                        <p className="type p-0 m-0">Reactive Metal</p>
                        <h3 className="text-white p-0 m-0">Bromine</h3>
                    </div>
                </div>
            </IonSlide>
        );
    }
}

export default Slide;
