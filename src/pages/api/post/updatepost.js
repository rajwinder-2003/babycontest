import { NextResponse } from "next/server";

const { MongoClient, BSON } = require("mongodb");


export default function handler(req, res) {
	if (req.method === 'POST') {
		let { id, like } = req.body;
		const uri = "mongodb+srv://rajwinder:hkl9KeJLImhRQgLc@cluster0.azsp0.mongodb.net/";
		const client = new MongoClient(uri);
		async function run() {
			try {
				const database = client.db('babycontest');
				const posts = database.collection('post');
				const filter = { _id: new BSON.ObjectId(`${id}`) };
				let newLike = like + 1;
				const updateDoc = {
					$set: {
						like: newLike
					},
				};
				const updatePost = await posts.updateOne(filter, updateDoc);
				res.status(200).json({ success: true, message: "data updated successfully" })
			} finally {
				await client.close();
			}
		}
		run().catch(console.dir);
	} else {

	}
}