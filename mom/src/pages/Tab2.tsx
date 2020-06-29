import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import {useHistory} from "react-router";

const Tab2: React.FC = () => {

    const history = useHistory();

    const onNavigate = () => {

        //push with state, and the direction is wrong when go back
        //the same issue happen for query string too
        history.push("/tab3", {value: 1});

        //push without state, and the direction is right when go back
        // history.push("/tab3");
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 2 page"
                          info="pay attention when go back"
                          onClick={onNavigate}
                          showPush={true}
                          showGoback={true}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
