/* eslint-disable react-hooks/rules-of-hooks */
import { NextApiRequest, NextApiResponse } from "next";
import { Discussion } from "@/models";

const Discussions = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (method == "GET") {
        const discussion = res.json(
            await Discussion.find().sort({ createdAt: -1 })
        );
        console.log(`The discussion data the api sending is ${discussion}`);
    }

    if (method == "POST") {
        const { name, profile, message } = req.body;

        const NewDiscussion = await Discussion.create({
            name,
            profile,
            message,
        });

        console.log(`The discussion sent for approval is ${NewDiscussion}`);
        return res.status(201).json({ success: true, data: NewDiscussion });
    }
};

export default Discussions;