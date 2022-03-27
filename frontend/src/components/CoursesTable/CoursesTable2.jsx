import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CoursesTable = (props) => {
  const { courses } = props;
  const navigate = useNavigate();
  // const [user, token] = useAuth();
  // const [courseTable, setCoursesTable] = useState([]);

  //-----------To-Do:
  //handleClick function: This button is supposed to lead to the course details page

  // function handleClick(course) {
  //   setEditCourseId(course.id)
  // }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align='right'>Company</TableCell>
              <TableCell align='right'>Purchase Date</TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {course.title}
                  </TableCell>
                  <TableCell align='right'>{course.company}</TableCell>
                  <TableCell align='right'>{course.purchase_date}</TableCell>
                  <TableCell align='right'>{course.price}</TableCell>
                  <TableCell align='right'>
                    <Button
                      color='secondary'
                      onClick={() => {
                        navigate(`/course/${course.id}/`);
                      }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CoursesTable;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.jsx
