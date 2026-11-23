import { useSearchParams } from "react-router-dom";

function CourseFilter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const course = searchParams.get("course");

    return (
        <>
            <h2>{course}</h2>
            <button onClick={() => setSearchParams({ course: "JavaScript" })}>Select JavaScript</button>
        </>
    )
}

export default CourseFilter;