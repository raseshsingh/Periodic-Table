import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonRow, IonCol, IonIcon, IonSlide, IonSlides} from "@ionic/react";
import {checkDatabase} from "../firebaseConfig";
import {closeCircle, gameController, gift, heart, homeOutline} from "ionicons/icons";

import '../theme/variables.css';
import '../theme/bs.css';
import Slide from "./Slide";

const slideOpts = {slidesPerView: 1.2}

// @ts-ignore
class ChemicalElements extends Component {
    constructor() {
        // @ts-ignore
        super();
        console.log('constructor called')
    }

    componentDidMount() {
        checkDatabase()
    }


    render() {
        return (
            <div>
                <IonRow className={'mx-3'}>
                    <IonCol>
                        <span className={'display-2 fw-light primary_heading'}>Chemical <br/><b>elements</b></span>
                    </IonCol>
                </IonRow>
                {/*<IonRow>*/}
                {/*    <IonCol size="9" size-lg offset="3">*/}
                {/*        ion-col size="6" size-lg offset="3"*/}
                {/*    </IonCol>*/}
                {/*</IonRow>*/}
                <IonRow className={'my-4'}>
                    <IonCol size={'2'} className={"bg-white zindex-100"}>
                        <b className={'rotated'}>METALS</b>
                    </IonCol>
                    <IonCol size={'10'}>
                        <IonSlides className={'overflow-visible'} options={slideOpts}>
                            <Slide/>
                            <Slide/>
                            <Slide/>
                            <Slide/>
                            <Slide/>
                            <Slide/>
                            <Slide/>
                        </IonSlides>
                    </IonCol>
                </IonRow>
                <IonRow className={"overflow-hidden-y"}>
                    <IonCol>
                        <button className="w-100 btn btn-primary btn-block">Click Me</button>
                        <pre className="" id='object'></pre>
                    </IonCol>
                </IonRow>
            </div>
        );
    }
}

export default ChemicalElements;
