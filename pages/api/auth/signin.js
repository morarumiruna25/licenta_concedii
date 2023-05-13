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
			console.log(register);
			
			if(!register){
				return res.json({ type: "error" , message: "Email sau parola gresite" });
			}

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
				register,
				type: "success",
				message: "Logare ralizata cu success !",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ type: "error", message: error.message });
	}
}
