
import "@/styles/mainpage.scss";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
import { ProductType } from "@/redux/cartReducer";
import OrderList from "@/components/Orders";
import ReduxProvider from "@/providers/ReduxProvider";

export default function Home() {

  return (
    <main className="mainpage">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      
    </main>
  );
}

/**
 how to make slider 

 dont define route handlers for server components only use it for client components

 how can u fetch data in client components 

 what is this pattern of fetching data in server and passing to client

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


IMAGE 
do u need height and widht if image is static or fill ?

if fill is true what should be the position of parent element

if u apply style to image will it work if fill is true what if not ?

what is priority in Image 

allways define height and width if using remote images link


Order >email,stripeId,products
 */
