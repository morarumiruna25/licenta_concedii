import db from '@/utils/db';
import nc from 'next-connect';
import Register from '@/models/userRegister';
import bcrypt from 'bcrypt';

db.connectDb();

export default async function handler(req, res) {
  try {
    await db.connectDb();

    if (req.method === 'POST') {
      const data = req.body;
      const { email, concediu } = data;

      const updateConcediu = await Register.findOneAndUpdate(
        { email: email },
        {
          $push: {
            concediu: { start: concediu[0].start, end: concediu[0].end },
          },
        },
        { new: true }
      );
      const user = await Register.findOne({ email });
      res.status(200).json({
        user: user,
        type: 'success',
        message: 'Concediu adaugat cu success!',
      });
    }
  } catch (error) {
    res.status(500).json({ type: 'error', message: error.message });
  }
}
