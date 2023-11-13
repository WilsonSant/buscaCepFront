import axios from "axios";

export async function getUserLogin(userName: string, password: string) {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users?userName=${userName}&password=${password}`
    );
    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
}

export async function sendUserLogin(userName: string, password: string) {
  try {
    const body = {
      userName,
      password,
    };
    const { data } = await axios.post("http://localhost:4000/users", body);
    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
}
