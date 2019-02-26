import axios from "axios";
const postUrl = "api/posts/";

export async function getPosts() {
	const res = await axios.get(postUrl);
	return res.data;
}

export async function addPosts(data) {
	const post = data.payload;
	const res = await axios.post(postUrl, post, {
		onUploadProgress: ProgressEvent => {
			alert(
				"image uploading" +
					Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
			);
		}
	});
	return res.data;
}

export async function editPost(data) {
	const post = data.payload;
	const res = await axios.put(postUrl, post);
	return res.data;
}

export async function remove(data) {
	const payload = data.id;
	const token = localStorage.getItem("token");
	const res = await axios.post(postUrl + "delete", { payload, token });
	return res.data;
}
