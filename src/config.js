export const getApiUser = (id) => {
  return `https://mock.reactlms.com/user/` + (id ? `?id=${id}` : "");
};
export const getApiImg = (gender, id) => {
  return `https://mock.reactlms.com/img/${gender}/${id}.jpg`;
};
export const API_KEY = "ptdatdb";
