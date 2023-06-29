import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: "Javascript",
    },
    {
        id: 2,
        name: "HTML-CSS",
    },
    {
        id: 3,
        name: "Reacjs",
    },
];

function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleEvent = ({ detail }) => {
            console.log(detail);
        };

        window.addEventListener(`lesson-${lessonId}`, handleEvent);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleEvent);
        };
    }, [lessonId]);

    return (
        <div>
            {lessons.map((lesson) => (
                <li
                    key={lesson.id}
                    style={{
                        margin: "20px",
                        color: lessonId === lesson.id ? "orange" : "#333",
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </div>
    );
}

export default Content;
