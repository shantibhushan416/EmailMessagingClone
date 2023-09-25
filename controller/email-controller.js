import Email from "../modal/email.js";

export const saveSentEmails = (request, response) => {
  try {
    const email = new Email(request.body);
    email.save();

    response.status(200).json("Email Sent Successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getEmails = async (request, response) => {
  try {
    let emails;
    if (request.params.type === "bin") {
      emails = await Email.find({ bin: true });
      return response.status(200).json(emails);
    } else if (request.params.type === "allmail") {
      emails = await Email.find({});
      return response.status(200).json(emails);
    } else if (request.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
      return response.status(200).json(emails);
    } else {
      emails = await Email.find({ type: request.params.type });
    }
    return response.status(200).json(emails);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const moveToBin = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("emails deleted successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const toggleStarredEmails = async (request, response) => {
  try {
    await Email.updateOne(
      { _id: request.body.id },
      { $set: { starred: request.body.value } }
    );
    response.status(200).json("email is starred mark.");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const deleteEmails = async (request, response) => {
  try {
    await Email.deleteMany({ _id: { $in: request.body } });
    return response.status(200).json("emails deleted successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
