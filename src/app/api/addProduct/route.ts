import { NextResponse } from "next/server";
import prismadb from "@/app/utils/prismaclient";
import { blob } from "stream/consumers";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/app/utils/firebase";

export async function POST(req: Request) {
  let data = await req.formData();
  console.log(data);
  const productImg: File | null = data.get("productImage") as unknown as File;
  const productImg2: File | null = data.get("productImage2") as unknown as File;
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const price = parseInt(data.get("price") as string);
  const isNew = Boolean(data.get("isNew") as string);
  console.log(productImg instanceof Blob);

  const imageBytes = await productImg.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);
  const imageBytes2 = await productImg.arrayBuffer();
  const imageBuffer2 = Buffer.from(imageBytes2);

  const storage = getStorage(app);
  const storageRef = ref(storage, title);

  const uploadTask = uploadBytesResumable(storageRef, imageBuffer);
  let url = ""

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {

    },
    () => {

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        url = downloadURL
        return NextResponse.json(url);
      });
    }
  );

  
}
export async function GET(req: Request) {
  return NextResponse.json("successfull buddy");
}
