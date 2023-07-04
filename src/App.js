import { useReducer, useRef } from "react";
import Content from "./Content";

//init value
const initState = {
    job: "",
    jobs: [],
};
//actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

//reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state, //bảo lưu cái state cạnh bên
                job: action.payload, // thay đổi cái cần
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            return {
                ...state,
                jobs: newJobs,
            };
        default:
            throw new Error("invalid action ");
    }
    return state;
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSumbit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    return (
        <div className="App" style={{ padding: 50 }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter to do..."
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={handleSumbit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(deleteJob(index))}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
