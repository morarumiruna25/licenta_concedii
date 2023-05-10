import db from "@/utils/db";
import nc from "next-connect";
import Register from "@/models/userRegister";
import bcrypt from "bcrypt";

db.connectDb();

export default async function handler(req, res) {
	try {
		await db.connectDb();

		if (req.method === "POST") {
			const { email, parola } = req.body;
			const register = await Register.findOne({ email });


			if (register) {
				const isValid = await bcrypt.compare(parola, register.parola);
				if (!isValid) {
					return res.json({ type: "error", message: "Email sau parola gresite" });
				}
			}

			if (!email || !parola) {
				return res.json({ type: "error", message: "Toate campurile sunt obilgatorii !" });
			}
			res.status(200).json({
				email: register.email,
				nume: register.nume,
				type: "success",
				message: "Logare ralizata cu success !",
			});
		}
	} catch (error) {
		res.json({ type: "error", message: error.message });
	}
}
