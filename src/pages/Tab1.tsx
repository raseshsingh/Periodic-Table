import React from 'react';
import {IonContent, IonPage} from '@ionic/react';
import ChemicalElements from '../components/ChemicalElements';
import './Tab1.css';
import MyHeader from "../components/MyHeader";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent className={'bg-white'}>
                <MyHeader/>
                <ChemicalElements elname={"item.elname"} type={'item.type'}
                                  img={"item.img"} sign={"item.sign"} shadow={'item.shadow'} desc={'item.desc'}
                                  properties={'item.properties'}/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
