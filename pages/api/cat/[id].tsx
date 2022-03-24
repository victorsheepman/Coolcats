import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const CatDetail = async (req: NextApiRequest, res: NextApiResponse) => {
    //connect to database and get data of item
    const db = new Database()
    const id = req.query.id as string
    const entry = await db.getById(id);

    //data response
    res.status(200).json({entry})
}

export default CatDetail;