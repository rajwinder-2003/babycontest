const { MongoClient } = require("mongodb");


export default function handler(req, res) {
	if (req.method === 'POST') {
		let body = req.body
		const uri = "mongodb+srv://rajwinder:hkl9KeJLImhRQgLc@cluster0.azsp0.mongodb.net/";
		const client = new MongoClient(uri);
		async function run() {
			try {
				const database = client.db('babycontest');
				const posts = database.collection('post');
				const allpost = await posts.insertOne(body)
				const postId = allpost.insertedId;
				res.status(200).json({ postId, ok: true })
			} finally {
				await client.close();
			}
		}
		run().catch(console.dir);
	} else {

	}
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '20mb',
		},
	},
}