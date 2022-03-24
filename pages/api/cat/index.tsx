import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allCats = async (req: NextApiRequest, res: NextApiResponse) => {
    //connect to database and get data
    const db = new Database()
    const allEntries = await db.getAll()
    
    //data response
    res.status(200).json({allEntries, length: allEntries.length})
}

export default allCats;