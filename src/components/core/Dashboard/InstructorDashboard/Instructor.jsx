import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import InstructorChart from './InstructorChart';
import { Link } from 'react-router-dom';

const Instructor = () => {
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=>state.profile);
    const [loading, setLoading] = useState(false);
    const [instructorData, setInstructorData] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(()=> {
        const getCourseDataWithStats = async() => {
            setLoading(true);
            
            const instructorApiData = await getInstructorData(token);
            const result = await fetchInstructorCourses(token);

            console.log(instructorApiData);

<<<<<<< HEAD
            if(instructorApiData?.length)
=======
            if(instructorApiData.length)
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
                setInstructorData(instructorApiData);

            if(result) {
                setCourses(result);
            }
            setLoading(false);
        }
        getCourseDataWithStats();
<<<<<<< HEAD
        // eslint-disable-next-line react-hooks/exhaustive-deps
=======
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
    },[])

    const totalAmount = instructorData?.reduce((acc,curr)=> acc + curr.totalAmountGenerated, 0);
    const totalStudents = instructorData?.reduce((acc,curr)=>acc + curr.totalStudentsEnrolled, 0);

  return (
    <div className='text-white'>
      <div>
        <h1>Hi {user?.firstName}</h1>
        <p>Let's start something new</p>
      </div>

      {loading ? (<div className='spinner'></div>)
      :courses.length > 0 
        ? (<div>
            <div>
            <div>
                <InstructorChart  courses={instructorData}/>
                <div>
                    <p>Statistics</p>
                    <div>
                        <p>Total Courses</p>
                        <p>{courses.length}</p>
                    </div>

                    <div>
                        <p>Total Students</p>
                        <p>{totalStudents}</p>
                    </div>

                    <div>
                        <p>Total Income</p>
                        <p>{totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {/* Render 3 courses */}
            <div>
                <p>Your Courses</p>
                <Link to="/dashboard/my-courses">
                    <p>View all</p>
                </Link>
            </div>
            <div>
                {
                    courses.slice(0,3).map((course)=> (
                        <div>
                            <img 
                                src={course.thumbnail}
<<<<<<< HEAD
                                alt={course.courseName || "Course thumbnail"}
=======
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
                            />
                            <div>
                                <p>{course.courseName}</p>
                                <div>
<<<<<<< HEAD
                                    <p>{course?.studentsEnrolled?.length || 0} students</p>
=======
                                    <p>{course.studentsEnrolled.length} students</p>
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
                                    <p> | </p>
                                    <p> Rs {course.price}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        
        )
        :(<div>
            <p>You have not created any courses yet</p>
<<<<<<< HEAD
            <Link to={"/dashboard/add-course"}>
=======
            <Link to={"/dashboard/addCourse"}>
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
                Create a Course
            </Link>
        </div>)}
    </div>
  )
}

export default Instructor
