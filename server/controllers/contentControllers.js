import Content from "../models/contentSchema.js";

const saveContent = async(req, res) => {
    try {

        // const title = "Rough";
        // const url = "randon_url";

        const {title, url} = req.body;

        if(!url)
        {
            return res.status(400).json({message: " url are required"})
        }

        const new_content = new  Content({
            title: title, 
            url: url
        });

        await new_content.save();

        return res.status(204).json({message: "content saved successfully"});
    } catch (error) {
        console.log("Internal Server Error", error);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export {saveContent};