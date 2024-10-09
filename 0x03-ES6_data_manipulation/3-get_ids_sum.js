const getStudentsByLocation = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentsByLocation;
