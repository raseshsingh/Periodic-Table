import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonCol, IonRow, IonSlides} from "@ionic/react";
import {dbRefObject} from "../firebaseConfig";

import '../theme/variables.css';
import '../theme/bs.css';
import Slide from "./Slide";

const slideOpts = {slidesPerView: 1.2}

// @ts-ignore
class ChemicalElements extends Component {
    constructor() {
        // @ts-ignore
        super();
        this.state = {
            metals: [
                {
                    "desc": "s is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminium makes up about 8% of the Earth's crust, where it is the third most abundant element and also the most abundant metal.",
                    "img": "https://i.ibb.co/L0CHR8z/four.jpg",
                    "name": "Aluminium",
                    "properties": "Aluminum is a shiny, silvery white colored metal that is light in weight and strong. Th density of aluminum is 2.7 g/mL, which means the metal will sink in water, but is still relatively light",
                    "sign": "Al",
                    "type": "Very Reactive"
                }
            ]
        }

        console.log('constructor called')
    }

    componentDidMount() {
        const metalRef = dbRefObject.child('metals')
        // Sync object/element Changes
        metalRef.on('value', snap => {
            this.setState({
                metals: snap.val()
            })
            console.table(this.state.metals)
        })

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
                            {Object.entries(this.state.metals).map((item) =>
                                <Slide name={item[1].name} className={'metalSlides'} type={item[1].type}
                                       img={item[1].img} sign={item[1].sign} key={item[0]}/>
                            )}
                        </IonSlides>
                    </IonCol>
                </IonRow>
                <IonRow className={"overflow-hidden-y"}>
                    <IonCol>

                        <pre className="" id='object'>{JSON.stringify(this.state.metals, null, 3)}</pre>

                    </IonCol>
                </IonRow>
            </div>
        );
    }
}

export default ChemicalElements;
