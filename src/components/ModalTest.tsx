import React, {useState} from 'react';
import {IonButton, IonModal} from '@ionic/react';

export const ModalTest: React.FC = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <IonModal isOpen={showModal} animated={true} cssClass='my-custom-class'>
                <p>{props.gard}</p>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>{props.btntxt}</IonButton>
        </div>
    );
};

export default ModalTest;
