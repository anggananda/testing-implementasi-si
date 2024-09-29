// Kode Pertama
const checkUserLogin = (username, password) => {
  if (!username || !password) return "Username and Password Required";

  if (username === "dwiangga" && password === "dwiangga111") {
    return "Login Succesful";
  } else {
    return "Login Failed";
  }
};

// Kode Kedua
const checkUserPermissions = (userRole, resource) => {
  if (!userRole) {
    return "No role Provided";
  }
  if (userRole === "admin") {
    return `Full access to ${resource}`;
  } else if (userRole === "editor") {
    if (resource === "dashboard") {
      return "Editor has access to Dashboard";
    } else {
      return "Editor has limited access";
    }
  } else if (userRole === "viewer") {
    if (resource === "public") {
      return "Viewer has access to public resources";
    } else {
      return "Viewer has no access";
    }
  } else {
    return "No access for unrecognized roles";
  }
};

// Kode Ketiga
const fetchAllData = async (apiUrl, batchSize) => {
  let data = [];
  let currentPage = 1;
  let moreDataAvailable = true;

  while (moreDataAvailable) {
    const response = await fetch(
      `${apiUrl}?page=${currentPage}&limit=${batchSize}`
    );
    const result = await response.json();

    if (result.length === 0) {
      moreDataAvailable = false;
    } else {
      data = data.concat(result);
      currentPage++;
    }
  }

  return data;
};
