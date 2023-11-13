import axios from "axios";

export async function getAddress(code: string) {
  try {
    const { data } = await axios.get(`http://viacep.com.br/ws/${code}/json/`);
    const dataObj = [{ id: 1, ...data }];
    return dataObj;
  } catch (error) {
    return false;
  }
}

export async function sendAddress(body) {
  try {
    const { data } = await axios.post("http://localhost:4000/address", body);
    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
}

export async function getUserAddress(id: number, setState) {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/address?userId=${id}`
    );
    return setState(data);
  } catch (error) {
    console.log("ERROR", error);
  }
}
