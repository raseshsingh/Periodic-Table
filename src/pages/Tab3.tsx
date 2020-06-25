import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ChemicalElements from '../components/ChemicalElements';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
        <IonHeader no-border>
            <IonToolbar>
                <IonTitle>Tab 3</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <ChemicalElements/>
        </IonContent>
    </IonPage>
  );
};

export default Tab3;
