import fs from "fs";
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
    } else {
      console.log("File deleted successfully");
    }
  });
};

export default deleteFile;
