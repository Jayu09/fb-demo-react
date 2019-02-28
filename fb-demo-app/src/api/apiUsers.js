import axios from "axios";
const userUrl = "api/users";

export async function addUser(data) {
	const res = await axios.post("api/users/register", data);
	return res.data;
}

export async function loginUser(data) {
	const res = await axios.post(userUrl + "/authentication", data);
	const token = res.data.token;
	localStorage.setItem("token", token);
	axios.defaults.headers.common["Authorization"] = token;
	return res.data;
}
export async function logoutUser() {
	delete axios.defaults.headers.common["Authorization"];
	localStorage.removeItem("token");
}

export async function updateUser(data) {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.put(userUrl + "/Update", data , {
		onUploadProgress: ProgressEvent => {
			alert(
				"image uploading" +
					Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
			);
		}
	});
	return res.data;	
}

export async function getUsers() {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.get(userUrl);
	return res.data;
}

export async function sendRequest(data) {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.post(userUrl + "/Request", data);
	return res.data;
}

export async function responceRequest(data) {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.post(userUrl + "/Responce", data);
	return res.data;
}

export async function searchUser(name) {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.post(userUrl + "/Select", {name});
	return res.data;
}

export async function getDeatails() {
	const token = await localStorage.getItem("token");
	axios.defaults.headers.common["Authorization"] = token;
	const res = await axios.get(userUrl + "/Details");
	return res.data;
}
