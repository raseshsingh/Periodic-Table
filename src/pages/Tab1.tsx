import React from 'react';
import {
    IonRow,
    IonCol,
    IonIcon,
    IonSlide,
    IonSlides,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ChemicalElements';
import './Tab1.css';
import ChemicalElements from "../components/ChemicalElements";
import {logoReact} from "ionicons/icons";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonRow className={'m-3 py-3'}>
                    <IonCol className={'text-left align-middle'}>
                        <b>SCIENCE_</b>
                    </IonCol>
                    <IonCol className={'text-right align-middle'}>
                        <b>ABOUT</b>
                    </IonCol>
                </IonRow>
                <ChemicalElements/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
