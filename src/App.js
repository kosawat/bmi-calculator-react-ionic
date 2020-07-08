import React, {useState} from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import BmiCard from './components/BmiCard';
import BmiCatCard from './components/BmiCatCard';

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">Height (cm):</IonLabel>
          <IonInput 
            type="number"
            value={height}
            onIonChange={(event) => setHeight(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Weight (kg):</IonLabel>
          <IonInput 
            type="number"
            value={weight}
            onIonChange={(event) => setWeight(event.detail.value)}
          />
        </IonItem>
        { (height && weight) &&
          <BmiCard height={height} weight={weight} />
        }
        <BmiCatCard />
      </IonContent>
    </IonApp>
  );
}

export default App;
