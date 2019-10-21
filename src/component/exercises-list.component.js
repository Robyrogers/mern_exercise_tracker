import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default function ExerciseList(){
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:5000/exercises")
            .then(res => {
                if(res.data.length > 0){
                    setExercises(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function deleteExercise(id){
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => {
                console.log(res.data)
                setExercises(() => exercises.filter(exercise => exercise._id!==id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    function exerciseList(){
        return exercises.map(el => <Exercise exercise={el} deleteExercise={deleteExercise} key={el._id}/>)
    }

    return(
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { exerciseList() }
                </tbody>
            </table>
        </div>
    )
}