import UserModal from "../Models/user.js";

export const getAllUserList = async (req, res) => {
  try {
    const data = await UserModal.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const emailExist = await UserModal.find({ email });
    if (!emailExist.length == 0) {
      res.status(200).json({ success: false, msg: "email already exists" });
    } else {
      const data = await UserModal.create({ name, email });
      res.status(200).json({ success: true, data });
    }
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const oneUser = async (req, res) => {
  try {
    const data = await UserModal.findById(req.params.id);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const updateUser = (req, res) => {
  try {
    UserModal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, result) => {
        if (err) {
          res.status(404).json({ success: false, error1: err.message });
          return;
        } else {
          res.status(200).json({ success: true, result });
          return;
        }
      }
    );
  } catch (error) {
    return res.status(404).json({ success: false, error2: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // console.log(req.params.id);
    const data = await UserModal.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(404).json({ success: false, error2: error.message });
  }
};
