import { NextResponse } from "next/server";

const { MongoClient, BSON } = require("mongodb");


export default function handler(req, res) {
	if (req.method === 'GET') {
		const slug = req.query.slug;
		const uri = "mongodb+srv://rajwinder:hkl9KeJLImhRQgLc@cluster0.azsp0.mongodb.net/";
		const client = new MongoClient(uri);
		async function run() {
			try {
				const database = client.db('babycontest');
				const posts = database.collection('post');
				const Onepost = await posts.findOne({_id : new BSON.ObjectId(`${slug}`)});
				res.status(200).json({ success: true, Onepost })
			} finally {
				await client.close();
			}
		}
		run().catch(console.dir);
	} else {

	}
}