function findDesignation(exp) {
  if (exp > 0 && exp <= 2) {
    console.log("Junior Dev");
  } else if (exp > 2 && exp <= 5) {
    console.log("Senior Dev");
  } else if (exp > 5 && exp <= 7) {
    console.log("Team Lead");
  } else if (exp > 7 && exp <= 10) {
    console.log("Project Manager");
  } else if (exp > 10) {
    console.log("Software Arch");
  } else {
    console.log("pass valid exp");
  }
}

findDesignation();
