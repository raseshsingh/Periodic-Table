import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonIcon, IonModal, IonSlide} from "@ionic/react";


import '../theme/variables.css';
import '../theme/bs.css';
import {arrowBack, cube, flask, information, planet} from "ionicons/icons";

type MyProps = {

    properties: string;
    desc: string;
    elname: string;
    type: string;
    img: string;
    sign: string;
    shadow: string;
}
type Mystate = {
    showModal: boolean,
    setShowModal: boolean
}


class Slide extends Component<MyProps, Mystate> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            showModal: false,
            setShowModal: false
        }
    }

    render() {
        // @ts-ignore
        const {elname, img, type, sign, shadow, desc, properties} = this.props;
        // @ts-ignore
        return (
            <IonSlide>
                <div className="slide text-left mb-7 position-relative"
                     style={{backgroundImage: `url(${img})`, boxShadow: `${shadow}`}}>
                    <div className="position-absolute m-2 top-2 right-2 bg-white-light rounded-my-sm">
                        <IonIcon icon={information} onClick={() => this.setState({showModal: true})}
                                 className={'align-bottom p-1 text-white display-4'}/>
                        <IonModal animated={true} isOpen={this.state.showModal} cssClass='my-custom-class'>
                            <div className="w-100 min-vh-100 overflow-auto bg-size--cover"
                                 style={{backgroundImage: `url(${img})`}}>
                                <div className="position-relative m-3">
                                    <div
                                        className="overflow-hidden position-absolute m-2 top-2 left-2 bg-white-light rounded-my-sm">
                                        <IonIcon icon={arrowBack}
                                                 onClick={() => this.setState({setShowModal: false, showModal: false})}
                                                 className={'blur-bg align-bottom p-1 text-white display-4'}/>
                                    </div>
                                </div>
                                <div className=" row m-3 mt-9">
                                    <div className="col-12">
                                        <span
                                            className={'text-left blur-bg display-4 text-white p-3 mb-4 bg-white-light rounded-my d-inline-block'}>
                                            {sign}
                                        </span>
                                    </div>
                                    <div className="col-12">
                                        <p className="text-secondary p-0 m-0">
                                            {type}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <h2 className="text-white p-0 m-0 display-4">
                                            {elname}
                                        </h2>
                                    </div>
                                </div>
                                <div className="row p-3 m-3 my-4">
                                    <p className={'text-white small-p'}>{desc}</p>
                                </div>
                                <div className="row rounded-my-top-bg m-0 w-100 blur-bg">
                                    <div className="px-3 m-3">
                                        <h3 className={'m-0 pt-3 pb-2 text-white font-weight400'}>Properties</h3>
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <IonIcon icon={cube}
                                                         className={'bg-white-light rounded-my-sm align-bottom p-2 text-white display-4'}/>
                                                <p className="icon-legend text-white text-center">
                                                    Properties
                                                </p>
                                            </div>
                                            <div className="col-3 text-center">
                                                <IonIcon icon={flask}
                                                         className={'bg-white-light rounded-my-sm align-bottom p-2 disabled display-4'}/>
                                                <p className="icon-legend disabled text-center">
                                                    Compound
                                                </p>
                                            </div>
                                            <div className="col-3 text-center">
                                                <IonIcon icon={planet}
                                                         className={'bg-white-light rounded-my-sm align-bottom p-2 disabled display-4'}/>
                                                <p className="icon-legend disabled text-center">
                                                    Application
                                                </p>
                                            </div>
                                            <div className="col-3">

                                            </div>
                                        </div>
                                        <p className="text-white small-p">
                                            {properties}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </IonModal>
                    </div>
                    <div className="position-absolute bottom-2 m-4">
                        <span
                            className={'text-left display-4 blur-bg text-white p-3 mb-4 bg-white-light rounded-my d-inline-block'}>
                            {sign}
                        </span>
                        <p className="type p-0 m-0">
                            {type}
                        </p>
                        <h3 className="text-white p-0 m-0 display-4">
                            {elname}
                        </h3>
                    </div>
                </div>
            </IonSlide>
        );
    }
}

export default Slide;
