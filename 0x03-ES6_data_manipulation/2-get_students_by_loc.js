const getStudentsByLocation = (list, loc) => {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.filter((student) => student.location === loc);
};

export default getStudentsByLocation;
