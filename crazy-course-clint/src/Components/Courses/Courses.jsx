import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import { Row } from 'react-bootstrap';

const Courses = () => {
    const allCourses= useLoaderData();
console.log(allCourses[0].data);
    return (
        <div>
            <Row>{
                allCourses[0].data.map(data=>
                    <SingleCourse key={data.id} data={data}></SingleCourse>
                )
            }</Row>
        </div>
    );
};

export default Courses;