import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./AssignmentCard.module.css";
import { useHistory } from "react-router-dom";

export interface IAssignmentProps {
  assignmentName: string;
  description?: string;
  buttonText: string;
  isAdmin: Boolean; // If true, use for admin page, if false, use for students
}

const AssignmentCard: React.FC<IAssignmentProps> = ({ assignmentName, description, buttonText, isAdmin }) => {
  const history = useHistory();
  let button;
  if (isAdmin) {
    button = <Button onClick={() => history.push(`/assignment?${assignmentName}`)}>{buttonText}</Button>;
  } else {
    button = <Button onClick={() => history.push(`/${assignmentName}`)}>{buttonText} </Button>; // Need to change this for student later
  }
  return (
    <div className={styles.outerCard}>
      <div className={styles.container}>
        <div className={styles.title}>{assignmentName}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.container}>{button}</div>
    </div>
  );
};
export default AssignmentCard;
