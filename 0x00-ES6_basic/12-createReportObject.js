import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(
  employeesList = createEmployeesObject(),
) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
