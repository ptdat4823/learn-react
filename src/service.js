import { getApiUser, API_KEY } from "./config";
export const getUser = async (id) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      key: API_KEY,
    },
  });

  if (!res.ok) {
    alert("User not found!!");
  }
  return res.json();
};

export const addUser = async (user) => {
  const url = getApiUser();
  const res = await fetch(url, {
    method: "POST",
    headers: {
      key: API_KEY,
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    alert("Add user failed!!");
  }
  return getUser();
};
export const updateUser = async (user) => {
  const url = getApiUser(user.id);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      key: API_KEY,
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    alert("Update user failed!!");
  }
  return getUser();
};
export const deleteUser = async (id) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      key: API_KEY,
    },
  });
  if (!res.ok) {
    alert("Delete user failed!!");
  }
  return getUser();
};
