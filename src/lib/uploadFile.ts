import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { nanoid } from "nanoid";
import { storage } from "./firebase";
export const uploadFile = async (File: File, filePath: string) => {
  if (!File) return;

  const newFileName = File.name + "_" + nanoid(8);
  const storageRef = ref(storage, `${filePath}/${newFileName}`);
  const upload = await uploadBytes(storageRef, File);

  if (upload) {
    //upload success
    const url = getDownloadURL(storageRef);

    return url;
  } else {
    throw new Error("Error Upload File");
  }
};
