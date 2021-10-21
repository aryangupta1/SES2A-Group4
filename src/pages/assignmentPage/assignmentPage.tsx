import { group } from "console";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../adminPage/adminPage.module.css";
import background from "../assignmentPage/assignmentPage.module.css";

const AssignmentPage = () => {
    const [groups, setGroups] = useState<[]>();
    const [groupIds, setId] = useState<[]>();
    const [assignment, setAssignment] = useState<any>();
    //Get assignment name from query param
    const assignmentName = window.location.search.replace('?', '');
    const getAssignment = async () =>{
        const email = sessionStorage.getItem('Email');
        const url = (sessionStorage.getItem('User') === 'Student')? `http://localhost:8000/assignments/admin@link.com.au/${assignmentName}`:
        `http://localhost:8000/assignments/${email}/${assignmentName}`;
        const assignmentRequest = await fetch(url);
        let assignmentInfo = await assignmentRequest.json();
        //Save assignment in storage
        sessionStorage.setItem(`${assignmentName}`, JSON.stringify(assignmentInfo));
        setAssignment(JSON.stringify(assignmentInfo));
        setGroups(await assignmentInfo[0].groups);
        //Save group Ids for later
        const groupIds: [] = [];
        const id  = groups?.forEach((group)=>groupIds.push(group['id']));
        sessionStorage.setItem(`${assignmentName}:NumStudents`, JSON.parse(assignment)[0].students.length)
        setId(groupIds);
        
    };
    const getStudentInGroup = async () =>{
        await groupIds?.forEach(async (id) => {
            const getStudents = await fetch(`http://localhost:8000/assignments/${id}/${assignmentName}/students`)
            const students = await getStudents.json();
            sessionStorage.setItem(`${id}`, await students);
        })
    }
    useEffect(() => {
        getAssignment();
        getStudentInGroup();
    }, []);
    const sort = async() => {
        //Add students to assignment first
        try{
            const body = {"assignmentName": assignmentName}
            const addAllToAssignment = await fetch(`http://localhost:8000/addAllStudentsToAssignment`, {
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            await addAllToAssignment.json().finally(async() => {
                //Begin sorting 
                const sortAssignments = await fetch(`http://localhost:8000/sortAssignments`, {
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                await sortAssignments.json().finally(async() => {
                    await getAssignment().finally(async() => {
                        await getStudentInGroup();
                    });
                })
            })
        }
        catch(error){
            console.log(error)
        }
    }
    //Someone please style this later :-)
    return(
    <div className={background.background}>
        <div className="four wide column">
            <Navbar children={["about", "login", "register", "logout"]} />
            <h1>Assignment : {assignmentName}</h1>
              <div className={styles.assignmentContainer}>
              <div className={styles.assignmentGrid}>
              {groups?.map((group) => (
                <AssignmentCard assignmentName={group['groupName']} buttonText={"Sort"} isAdmin={true} 
                description={'Current members: ' + sessionStorage.getItem(group['id'])}/>
            ))}
            <br></br>
            {sessionStorage.getItem('User') === 'Admin' ?<Button onClick={() => sort()}>Sort All Groups</Button>: null}
              </div>
            </div>
        </div>
    </div>
    )
}

export default AssignmentPage;