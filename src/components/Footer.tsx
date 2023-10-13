import React from "react";
import "@/styles/footer.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="item">
            <div>Categories</div>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accesories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <div>Links</div>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <div>About</div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              maiores, recusandae quidem distinctio soluta minima placeat
              quaerat facere magni! Iste a quia nulla quisquam, illo officia!
              Omnis illo excepturi nihil in et, eveniet, aliquid consequuntur{" "}
            </span>
          </div>
          <div className="item">
            <div>Contact</div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              maiores, recusandae quidem distinctio soluta minima placeat
              quaerat facere magni! Iste a quia nulla quisquam, illo officia!
              Omnis illo excepturi nihil in et, eveniet, aliquid consequuntur{" "}
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span>NazrulStore&copy;</span>
            <span>Copyright 2023,All Rights Reserved</span>
          </div>
          <div className="right">
            <Image
              src={"/stripe.png"}
              width={600}
              height={200}
              alt={"stripe"}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
