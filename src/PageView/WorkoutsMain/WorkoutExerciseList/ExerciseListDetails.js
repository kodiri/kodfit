import React from "react";
import "./ExerciseListDetails.css";
import ExerciseList from "./WorkoutExerciseList";
import ExercisesData from "../../../Data/ExercisesData";

export default class ExerciseListDetails extends React.Component {
    constructor() {
        super();
        this.state = { listId: {} };
    }

    componentDidMount() {
        let listId = this.props.match.params.listId;
        this.setState({
            list: listId,
        });
    }

    render() {
        let addedExercise = [];

        let listExercise = ExercisesData().filter((exercise) => {
            return (
                exercise.category === this.state.list ||
                exercise.workout === this.state.list
            );
        });
        addedExercise.push(listExercise);

        return (
            <div className="ExercisesList">
                <div className="containerTop">
                    <a
                        className="button primary rounded-capsule"
                        href="../workout-list"
                    >
                        Exercises
                    </a>
                    <a
                        className="button primary rounded-capsule"
                        href={`/dashboard/start-training/${this.state.list}`}
                    >
                        Start
                    </a>
                </div>
                <div className="containerBottom">
                    {" "}
                    {listExercise.map((exercise) => {
                        return (
                            <ExerciseList
                                key={exercise.id}
                                id={exercise.id}
                                exerciseName={exercise.exerciseName}
                                reps={exercise.reps}
                                workout={exercise.workout}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
