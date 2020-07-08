import React from 'react'
import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonGrid, 
    IonRow, 
    IonCol 
} from '@ionic/react';

const BmiCatCard = () => {
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardSubtitle>
                    BMI Categories
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol><b>BMI</b></IonCol>
                        <IonCol><b>Weight Status</b></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Below 18.5</IonCol>
                        <IonCol>Underweight</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>18.5 – 24.9</IonCol>
                        <IonCol>Normal or Healthy Weight</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>25.0 – 29.9</IonCol>
                        <IonCol>Overweight</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>30.0 and Above</IonCol>
                        <IonCol>Obese</IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default BmiCatCard