
const { MongoClient } = require("mongodb");


export default function handler(req, res) {
	if (req.method === 'GET') {
		const uri = "mongodb+srv://rajwinder:hkl9KeJLImhRQgLc@cluster0.azsp0.mongodb.net/";
		const client = new MongoClient(uri);
		async function run() {
			try {
				const database = client.db('babycontest');
				const posts = database.collection('post');
				const query = {}
				const allpost = await posts.find(query).toArray();
				res.status(200).json(allpost)
			} finally {
				await client.close();
			}
		}
		run().catch(console.dir);
	} else {

	}
}