import axios from "axios";

export const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiver");

  try {
    const result = await axios.post(
      `https://api.cloudinary/v1_1/Grey Mirror/image/upload`,
      data
    );
    const { url } = result.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};
