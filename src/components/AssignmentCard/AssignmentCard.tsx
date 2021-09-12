import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./AssignmentCard.module.css";
import { useHistory } from "react-router-dom";

export interface IAssignmentProps {
    title: string;
    description: string;
  }

 const AssignmentCard: React.FC<IAssignmentProps> = ({ title, description }) => {
  const history = useHistory();
  return (
    <div className={styles.outerCard}>
        <div className={styles.container}>
            <div className={styles.title}>
            {title}
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.description}>
            {description}
            </div>
        </div>
        <div className={styles.container}>
            <Button disabled> 
            Join
           </Button>
        </div>
    </div>
  );
};
export default AssignmentCard;