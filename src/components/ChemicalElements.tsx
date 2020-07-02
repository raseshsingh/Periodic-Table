import React, {Component} from 'react';
import './ChemicalElements.css';
import {IonCol, IonRow, IonSlides} from "@ionic/react";
import {actinideRef, metalRef, nobelGasRef, nonMetalRef} from "../firebaseConfig";

import '../theme/variables.css';
import '../theme/bs.css';
import Slide from "./Slide";

const slideOpts = {slidesPerView: 1.2}

type MyProps = {}
type MyState = {
    metals: SlideProps[],
    actinide: SlideProps[],
    nonMetals: SlideProps[],
    nobelGas: SlideProps[],
}
type SlideProps = {
    elname: string,
    desc: string,
    img: string,
    properties: string,
    type: string,
    shadow: string,
    sign: string,
}


// @ts-ignore
class ChemicalElements extends Component<SlideProps, MyState> {
    constructor() {
        // @ts-ignore
        super();
        this.state = {
            metals: [
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                }
            ],
            actinide: [
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                }
            ],
            nonMetals: [
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                }
            ],
            nobelGas: [
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                },
                {
                    "desc": "",
                    "img": "",
                    "elname": "",
                    "properties": "",
                    "sign": "",
                    "type": "",
                    "shadow": ""
                }
            ]
        }

        console.log('constructor called')
    }

    componentDidMount() {

        // Sync object/element Changes
        metalRef.on('value', snap => {
            this.setState({
                metals: snap.val()
            })
        })

        nonMetalRef.on('value', snap => {
            this.setState({
                nonMetals: snap.val()
            })
        })

        nobelGasRef.on('value', snap => {
            this.setState({
                nobelGas: snap.val()
            })
        })
        actinideRef.on('value', snap => {
            this.setState({
                actinide: snap.val()
            })
        })
    }


    render() {
        return (
            <div className={'py-3'}>
                <IonRow className={'mx-3'}>
                    <IonCol>
                        <span className={'display-2 fw-light primary_heading'}>Chemical <br/><b>elements</b></span>
                    </IonCol>
                </IonRow>
                {/*<IonRow>*/}
                {/*    <IonCol size="9" size-lg offset="3">*/}
                {/*        ion-col size="6" size-lg offset="3"*/}
                {/*    </IonCol>*/}
                {/*</IonRow>*/}

                {/*--------------------------METALS--------------------------*/}
                <IonRow className={'my-4'}>
                    <IonCol size={'2'} className={"bg-white zindex-100"}>
                        <b className={'rotated'}>METALS</b>
                    </IonCol>
                    <IonCol size={'10'}>
                        <IonSlides className={'overflow-visible'} options={slideOpts}>
                            {this.state.metals.map((item, index: number) =>
                                <Slide elname={item.elname} type={item.type}
                                       img={item.img} sign={item.sign} shadow={item.shadow} desc={item.desc}
                                       properties={item.properties} key={index}/>
                            )}
                        </IonSlides>
                    </IonCol>
                </IonRow>

                {/*--------------------------NON METALS--------------------------*/}
                <IonRow className={'my-4'}>
                    <IonCol size={'2'} className={"bg-white zindex-100"}>
                        <b className={'rotated even'}>NON&nbsp;METALS</b>
                    </IonCol>
                    <IonCol size={'10'}>
                        <IonSlides className={'overflow-visible'} options={slideOpts}>
                            {this.state.nonMetals.map((item, index: number) =>
                                <Slide elname={item.elname} type={item.type}
                                       img={item.img} sign={item.sign} shadow={item.shadow} desc={item.desc}
                                       properties={item.properties} key={index}/>
                            )}
                        </IonSlides>
                    </IonCol>

                </IonRow>

                {/*--------------------------ACTINIDE--------------------------*/}
                <IonRow className={'my-4'}>
                    <IonCol size={'2'} className={"bg-white zindex-100"}>
                        <b className={'rotated'}>ACTINIDE</b>
                    </IonCol>
                    <IonCol size={'10'}>
                        <IonSlides className={'overflow-visible'} options={slideOpts}>
                            {this.state.actinide.map((item, index: number) =>
                                <Slide elname={item.elname} type={item.type}
                                       img={item.img} sign={item.sign} shadow={item.shadow} desc={item.desc}
                                       properties={item.properties} key={index}/>
                            )}
                        </IonSlides>
                    </IonCol>
                </IonRow>

                {/*--------------------------NOBEL GASES--------------------------*/}
                <IonRow className={'mb-2'}>
                    <IonCol size={'2'} className={"bg-white zindex-100"}>
                        <b className={'rotated even'}>NOBEL&nbsp;GASES</b>
                    </IonCol>
                    <IonCol size={'10'}>
                        <IonSlides className={'overflow-visible'} options={slideOpts}>
                            {this.state.nobelGas.map((item, index: number) =>
                                <Slide elname={item.elname} type={item.type}
                                       img={item.img} sign={item.sign} shadow={item.shadow} desc={item.desc}
                                       properties={item.properties} key={index}/>
                            )}
                        </IonSlides>
                    </IonCol>

                </IonRow>

                {/*<IonRow className={"overflow-hidden-y"}>*/}
                {/*    <IonCol>*/}

                {/*        <pre className="" id='object'>{JSON.stringify(this.state.metals, null, 3)}</pre>*/}

                {/*    </IonCol>*/}
                {/*</IonRow>*/}
            </div>
        );
    }
}

export default ChemicalElements;
