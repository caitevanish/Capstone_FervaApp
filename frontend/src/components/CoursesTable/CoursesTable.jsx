import React from 'react';

const CoursesTable = ({ courses, setCourses }) => {
  // const [user, token] = useAuth();
  // const [courseTable, setCoursesTable] = useState([]);


  //-----------To-Do:
  //handleClick function: This button is supposed to lead to the course details page

  // function handleClick(course) {
  //   setEditCourseId(course.id)
  // }


  return (
    <div className=''>
      <h2>My Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Price</th>
            <th>Month/Year</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course, index) => {
              return (
                <tr key={index}>
                  <td>{course.title}</td>
                  <td>{course.company}</td>
                  <td>{course.price}</td>
                  <td>{course.purchase_date}</td>
                  <td>
                    <button
                    // onClick={() => handleClick(course)}
                    // classname='button'
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.jsx
