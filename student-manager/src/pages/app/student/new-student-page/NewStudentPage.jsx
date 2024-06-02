import React, { useEffect } from "react";
import StudentForm from "../../../../components/app/student-form/StudentForm";

const NewStudentPage = () => {
  // useEffect(() => {
  //   console.log("mount:new student");

  //   return () => {
  //     console.log("unmount:newstudent");
  //   };
  // }, []);

  return (
    <div>
      <StudentForm />
    </div>
  );
};

export default NewStudentPage;
