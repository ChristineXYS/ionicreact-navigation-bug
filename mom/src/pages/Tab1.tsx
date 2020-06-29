import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useHistory, withRouter} from "react-router";

const Tab1: React.FC = () => {

    const history = useHistory();

    const onNavigate = () => {

        //push with state, and the direction is wrong when go back
        //the same issue happen for query string too
        history.push("/tab2", {value: 1});

        //push without state, and the direction is right when go back
        // history.push("/tab2");
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page"
                          info="pay attention when go back"
                          onClick={onNavigate}
                          showPush={true}
                          showGoback={false}/>
      </IonContent>
    </IonPage>
  );
};

export default (withRouter(Tab1));
