import React from 'react';
import {IonCol, IonRouterLink, IonRow} from '@ionic/react';

const MyHeader: React.FC = () => {
    return (
        <IonRow className={'m-3 '}>
            <IonCol className={'text-left align-middle'}>
                {/*<b>SCIENCE_</b>*/}
                <IonRouterLink color={'dark'} href={'/tab1'}><b>SCIENCE_</b></IonRouterLink>

            </IonCol>
            <IonCol className={'text-right align-middle'}>
                <b>ABOUT</b>
            </IonCol>
        </IonRow>
    );
};

export default MyHeader;
