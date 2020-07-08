import React from 'react';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react';
import { calulateBmiMetric } from '../functions/calculateBMI';

const BmiCard = ({height, weight}) => {
    const bmiResult = calulateBmiMetric(height, weight);

    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardSubtitle>
                    BMI
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Your Height: {height} cm</p>
                <p>Your Weight: {weight} kg</p>
                <h1>Your BMI: {bmiResult.toFixed(1)} </h1>
            </IonCardContent>
        </IonCard>
    );
};

export default BmiCard;