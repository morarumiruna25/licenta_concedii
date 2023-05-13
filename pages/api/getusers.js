import db from '@/utils/db';
import Register from '@/models/userRegister';
db.connectDb();

export default async function handler(req, res) {
  try {
    await db.connectDb();
    const data = await Register.find();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.json({ type: 'error', message: error.message });
  }
}
