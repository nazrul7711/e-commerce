
import "@/styles/mainpage.scss";
import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";

export default function Home() {

  return (
    <main className="mainpage">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
    </main>
  );
}

/**
 how to make slider 
product =>title, desc, img, img2 , price  , isNew
category =>title,  desc, img, 
subCategory=>title

one-to-many relation 
model User{
  id String @id () @map("_id") @db.ObjectId @default(auto())
  title String
  posts Post[]


}
model Post {
  id String @id () @map("_id") @db.ObjectId @default(auto())
  user User @relations(fields:[authorId],references:[id])
  userId String @db.ObjetctId
}

many-to-many
model User {
   id String @id () @map("_id") @db.ObjectId @default(auto())
   postIds String [] @db.ObjectId
   posts Post[] relations(fields:[postIds],references:[id])
}
model Post{
  id String @id () @map("_id") @db.ObjectId @default(auto())
  userIds String [] @db.ObjectId
  users User[] relations(fields:[userIds] , references:[id])
}


AWS
bucket name > no capital > no underscore
create bucket name,untick block all public access,tick i acknowledge create bucket
modify permissions>edit>policy generator>s3 bucket policy>effect deny>principal * > actions deleteObject,putObject,getObject, arn will be the whole arn number listed to be copied

make sure to add /* in "Resource": "arn:aws:s3:::e-commerce-nazrul",


firebase > add project> install firebase, install uuid> storage > getstarted>edit rules and publish>create firebase file in your project for configuration>project settings> import getStorage> export storage= getStorage(app)
 */
