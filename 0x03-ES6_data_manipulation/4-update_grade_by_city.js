const updateStudentGradeByCity = (students, city, newGrades) => {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      ); // Find new grade for the student
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : "N/A", // Add new grade or 'N/A'
      };
    });
};

export default updateStudentGradeByCity;
