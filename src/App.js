import { useState } from "react";

// Response from API
const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
    {
        id: 2,
        name: "Javascript",
    },
    {
        id: 3,
        name: "React",
    },
];

function App() {
    const [checked, setChecked] = useState([]);
    console.log(checked);

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    const handleSumbit = () => {
        console.log({
            checked,
        });
    };

    return (
        <div className="App" style={{ padding: 50 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSumbit}> Register</button>
        </div>
    );
}

export default App;
