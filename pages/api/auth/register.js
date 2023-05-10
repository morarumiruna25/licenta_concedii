import db from "@/utils/db";
import nc from "next-connect";
import Register from "@/models/userRegister";
import bcrypt from "bcrypt";

db.connectDb();

export default async function handler(req, res) {
	try {
		await db.connectDb();

		if (req.method === "POST") {
			const data = req.body.userRegister;
			const { nume, parola, cf_parola, email, departament } = data;

			if (!nume || !email || !parola || !departament) {
				return res.json({ type: "error", message: "Toate campurile sunt obilgatorii !"  });
			}
			if (parola != cf_parola) {
				return res.json({ type: "error", message: "Parolele nu rocespund !" });
			}
			const bcryptparola = await bcrypt.hash(parola, 12);

			const newRegister = new Register({ nume, email, departament, parola: bcryptparola });
			newRegister.save();

			res.status(200).json({ type: "success", message: "Cont inregistrat cu success !" });
		}
	} catch (error) {
		res.status(500).json({ type: "error", message: error.message });
	}
}
