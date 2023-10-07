import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/app/utils/firebase";
import prismadb from "@/app/utils/prismaclient"

export async function POST(req: Request) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "user is not logged in" });
  }
  let res = await req.formData();
  console.log(res)
  let title: string = res.get("title") as unknown as string;
  let desc: string = res.get("desc") as unknown as string;
  let img: File = res.get("img") as unknown as File;

  const storage = getStorage(app);
  const storageRef = ref(storage, title);
  const uploadTask = uploadBytesResumable(storageRef, await img.arrayBuffer());
  // await file.arrayBuffer();

  let imgLink = () => {
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => reject(error));
        }
      );
    });
  };
  let link = await imgLink() as string
  let newCategory = await prismadb.category.create({
    data:{
      title,
      desc,
      img:link
    }
  })
  if(newCategory){
    return NextResponse.json({ msg:"category created" });
  }
  return NextResponse.json({msg:"category creation unsuccessful"});
}
