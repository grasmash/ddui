export function createRegistar(registeredApplications) {
  return {
    type: 'CREATE_REGISTAR',
    registered_applications: registeredApplications
  };
}
