import { ADRESS } from "../utils/messages";

export const addUserInfo = (userInfo, userID, token) => {
  console.log(userInfo, userID, token);
  return fetch(ADRESS + "/add-userinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ userInfo: userInfo, userID: userID }),
  });
};

export const updateUserInfo = (userInfo, userID, token) => {
  console.log(userInfo, userID, token);
  // console.log(JSON.stringify(userInfo))
  return fetch(ADRESS + "/update-userinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ userInfo: userInfo, userID: userID }),
  });
};
