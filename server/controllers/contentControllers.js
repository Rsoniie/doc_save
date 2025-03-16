import Content from "../models/contentSchema.js";
import User from "../models/userSchema.js";
import localStorage from "localStorage";

const saveContent = async (req, res) => {
  try {
    // const title = "Rough";
    // const url = "randon_url";

    const { title, url, category } = req.body;

    if (!url) {
      return res.status(400).json({ message: " url are required" });
    }

    console.log("this is title", title);
    console.log("this is url", url);
    const new_content = new Content({
      title: title,
      url: url,
      category: category,
    });

    await new_content.save();

    const user_name = localStorage.getItem("user_name");
    let user = await User.findOne({ username: user_name });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.categories) {
      user.categories = [];
    }

    let categoryExists = false;

    user.categories.forEach((element) => {
      if (element.has(category)) {
        categoryExists = true;

        let existingIds = element.get(category) || [];
        if (!existingIds.includes(new_content._id)) {
          existingIds.push(new_content._id);
          element.set(category, existingIds);
        }
      }
    });

    if (!categoryExists) {
      user.categories.push(new Map([[category, [new_content._id]]]));
    }

    user.markModified("categories");
    await user.save();

    return res.status(201).json({ message: "content saved successfully" });
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

export { saveContent };
