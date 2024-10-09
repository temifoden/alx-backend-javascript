const getStudentsByLocation = (list, loc) => {
  return list.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentsByLocation;
