import React, {Component} from 'react';
import {IonCol, IonContent, IonPage, IonRow} from '@ionic/react';
import './Tab2.css';
import MyHeader from "../components/MyHeader";

const imgLinks = [
    "https://i.ibb.co/KrkCvzs/Any-Conv-com-ele-1.jpg",
    "https://i.ibb.co/dPcVx82/Any-Conv-com-ele-2.jpg",
    "https://i.ibb.co/qMVnZNg/Any-Conv-com-ele-3.jpg",
    "https://i.ibb.co/2KdcgG3/Any-Conv-com-ele-4.jpg",
    "https://i.ibb.co/m0kLfT4/Any-Conv-com-ele-5.jpg",
    "https://i.ibb.co/3z6KMJy/Any-Conv-com-ele-6.jpg",
    "https://i.ibb.co/DGCtQJD/Any-Conv-com-ele-7.jpg",
    "https://i.ibb.co/ggW0g39/Any-Conv-com-ele-8.jpg",
    "https://i.ibb.co/jJznNVQ/Any-Conv-com-ele-9.jpg",
    "https://i.ibb.co/NpVFnzL/Any-Conv-com-ele-10.jpg",
    "https://i.ibb.co/drTsWdN/Any-Conv-com-ele-11.jpg",
    "https://i.ibb.co/DtfGDLp/Any-Conv-com-ele-12.jpg",
    "https://i.ibb.co/GWXYwnT/Any-Conv-com-ele-13.jpg",
    "https://i.ibb.co/gtnpBZw/Any-Conv-com-ele-14.jpg",
    "https://i.ibb.co/THX782D/Any-Conv-com-ele-15.jpg",
    "https://i.ibb.co/QprVqx5/Any-Conv-com-ele-16.jpg",
    "https://i.ibb.co/P6NVn68/Any-Conv-com-ele-17.jpg",
    "https://i.ibb.co/pKCwG4X/five.jpg",
    "https://i.ibb.co/L0CHR8z/four.jpg",
    "https://i.ibb.co/wWyC2Jg/one.jpg",
    "https://i.ibb.co/64PfHD8/seven.jpg",
    "https://i.ibb.co/pvc7bvK/six.jpg",
    "https://i.ibb.co/021k9CP/three.jpg"
];
const bgList = ["bg-primary", "bg-warning", "bg-success", "bg-info", "bg-danger", "bg-dark", "bg-gradient-primary", "bg-gradient-warning", "bg-gradient-success", "bg-gradient-info", "bg-gradient-danger", "bg-gradient-dark", "bg-translucent-primary", "bg-translucent-warning", "bg-translucent-success", "bg-translucent-info", "bg-translucent-danger", "bg-translucent-dark"]

function getImg() {
    let min;
    min = Math.ceil(0);
    let max;
    max = Math.floor(19);
    return imgLinks[Math.floor(Math.random() * (max - min + 1)) + min];
}

class Tab2 extends Component<any, any> {
    constructor(props: Readonly<{ metals: any, actinide: any, nonMetals: any }>) {
        // @ts-ignore
        super(props);
        this.state = {
            symbols: ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"]
        }

        console.log('constructor called')
    }

    render() {

        getImg()
        return (
            <IonPage>

                <IonContent>
                    <MyHeader/>
                    <div className={'py-3'}>
                        <IonRow className={'mx-3'}>
                            <IonCol>
                                <span
                                    className={'display-2 fw-light primary_heading'}>Chemical <br/><b>symbols</b></span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={'my-3 mb-5'}>

                            {this.state.symbols.map((item: any) =>
                                <IonCol className={'p-2 text-center'} size="3" key={item}>
                                    <span style={{backgroundImage: `url(${getImg()})`}}
                                          className={'text-center display-4 blur-bg text-white p-3 bg-white-light rounded-my d-inline-block'}>
                                        {item}
                                    </span>
                                </IonCol>
                            )}
                        </IonRow>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}


export default Tab2;
