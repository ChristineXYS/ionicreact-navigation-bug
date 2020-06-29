import React from 'react';
import './ExploreContainer.css';
import {IonButton} from "@ionic/react";
import {useHistory, withRouter} from "react-router";

interface ContainerProps {
  name?: string;
  info?: string;
  onClick?: () => void;
  showPush: boolean;
  showGoback: boolean;
}

const ExploreContainer: React.FC<ContainerProps>
    = ({ name, info, onClick , showPush, showGoback}) => {

    const history = useHistory();

    const onClickForwardHandler = () => {
        if (onClick) {
            onClick();
        }
    };

    const onClickBackHandler = () => {
        history.goBack();
    };

  return (
    <div className="container">
        <p>
            <strong>{name}</strong>
        </p>
        <p>
            {info}
        </p>
        {showPush && <IonButton onClick={onClickForwardHandler}> push </IonButton>}
        <br/>
        {showGoback && <IonButton onClick={onClickBackHandler}> go back </IonButton>}
    </div>
  );
};

export default ExploreContainer;
