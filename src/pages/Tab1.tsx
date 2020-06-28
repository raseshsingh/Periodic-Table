import React from 'react';
import {IonContent, IonPage} from '@ionic/react';
import ChemicalElements from '../components/ChemicalElements';
import './Tab1.css';
import MyHeader from "../components/MyHeader";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <MyHeader/>
                <ChemicalElements/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
