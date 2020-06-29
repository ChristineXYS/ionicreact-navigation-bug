import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {

    const onNavigate = () => {
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 3 page"
                          info="pay attention when go back"
                          onClick={onNavigate}
                          showPush={false}
                          showGoback={true}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
