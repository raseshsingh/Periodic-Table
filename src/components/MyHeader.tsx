import React, {useState} from 'react';
import {IonCol, IonIcon, IonModal, IonRouterLink, IonRow} from '@ionic/react';
import {arrowBack, logoCapacitor, logoFirebase, logoIonic} from "ionicons/icons";

const MyHeader: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonRow className={'m-3 '}>
            <IonCol className={'text-left align-middle'}>
                {/*<b>SCIENCE_</b>*/}
                <IonRouterLink color={'dark'} href={'/tab1'}>
                    <b>SCIENCE_</b>
                </IonRouterLink>

            </IonCol>
            <IonCol className={'text-right align-middle'}>
                <b onClick={() => setShowModal(true)}>ABOUT</b>
            </IonCol>
            <IonModal animated={true} isOpen={showModal} cssClass='my-custom-class'>
                <div className="w-100 overflow-auto bg-size--cover">
                    <div className="position-relative m-3">
                        <div
                            className="overflow-hidden position-absolute m-2 top-2 left-2 bg-black-light rounded-my-sm">
                            <IonIcon icon={arrowBack}
                                     onClick={() => setShowModal(false)}
                                     className={'blur-bg align-bottom p-1 text-white display-4'}/>
                        </div>
                    </div>
                    <div className="row m-3 mt-9">
                        <div className="card w-100 shadow-none">
                            <div className="p-3 d-flex">
                                <div>
                                    <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                                        <IonIcon className={'display-3'} icon={logoIonic}/>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6">Ionic Framework</span>
                                    <p className="text-sm text-muted mb-0">Built to be customized.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-100 shadow-none">
                            <div className="p-3 d-flex">
                                <div>
                                    <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                                        <IonIcon className={'display-3 text-white'} icon={logoFirebase}/>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6">Firebase</span>
                                    <p className="text-sm text-muted mb-0">Realtime Data sync.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card w-100 shadow-none">
                            <div className="p-3 d-flex">
                                <div>
                                    <div className="icon icon-shape rounded-circle bg-dark text-white mr-4">
                                        <svg className="text-white" version="1.1" viewBox="0 0 32 32" width="26"
                                             height="26"
                                             aria-labelledby="unsplash-home" aria-hidden="false">
                                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
                                                  style={{fill: 'white'}}></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6">Unsplash</span>
                                    <p className="text-sm text-muted mb-0">Royalty free images.</p>
                                </div>
                            </div>
                        </div>


                        <div className="card w-100 shadow-none">
                            <div className="p-3 d-flex">
                                <div>
                                    <div className="icon icon-shape rounded-circle bg-success text-white mr-4">
                                        <IonIcon className={'display-3 text-white'} icon={logoCapacitor}/>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6">Capacitor</span>
                                    <p className="text-sm text-muted mb-0">X-Platform app runtime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonModal>
        </IonRow>
    );
};

export default MyHeader;
