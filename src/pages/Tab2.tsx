import React from 'react';
import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonNote
} from '@ionic/react';
import ExploreContainer from '../components/ChemicalElements';
import './Tab2.css';

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel>Primary Note</IonLabel>
                    <IonNote slot="end" color="primary">99</IonNote>

                </IonItem>

                <IonItem>
                    <IonLabel>Secondary Note</IonLabel>
                    <IonNote slot="end" color="secondary">99</IonNote>
                </IonItem>

                <IonItem>
                    <IonLabel>Tertiary Note</IonLabel>
                    <IonNote slot="end" color="tertiary">99</IonNote>
                </IonItem>

                <IonItem>
                    <IonLabel>Success Note</IonLabel>
                    <IonNote slot="end" color="success">99</IonNote>
                </IonItem>

                <IonItem>
                    <IonLabel>Warning Note</IonLabel>
                    <IonNote slot="end" color="warning">99</IonNote>
                </IonItem>

                <IonItem>
                    <IonLabel>Danger Note</IonLabel>
                    <IonNote slot="end" color="danger">99</IonNote>
                </IonItem>


            </IonContent>
    </IonPage>
  );
};

export default Tab2;
