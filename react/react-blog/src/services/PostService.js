import axios from "axios";

export default class PostService {
	// static??
	static async getAllPosts() {
		const response = await axios
			.get('https://jsonplaceholder.typicode.com/posts')
		return response.data
	}
}