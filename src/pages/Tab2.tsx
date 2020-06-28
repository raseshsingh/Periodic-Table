import React from 'react';
import {IonContent, IonItem, IonLabel, IonNote, IonPage} from '@ionic/react';
import './Tab2.css';
import MyHeader from "../components/MyHeader";

const Tab2: React.FC = () => {
    return (
        <IonPage>

            <IonContent>
                <MyHeader/>
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
