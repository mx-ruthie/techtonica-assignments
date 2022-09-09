import {useState} from "react";

const [students, setStudents] = useState([]);
const Students = () => {
  return (
<div>
     <p>{students[0].firstname} {students[0].lastname}</p>
</div>
  )
}
export default Students;
