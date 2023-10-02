import React from 'react'
import "@/styles/categories.scss"
  import Image from 'next/image'
import Link from 'next/link'


const Categories = () => {
  let images = ["/shoes.jpg","/male.jpg","/woman.jpg","/sale.jpg","/accessories.jpg","/newSeason.jpg"]
  return (
    <div className="categories">
      <div className="first">
        <Image src={images[0]} fill={true} alt="shoes" />
        <Link href={"/products/shoes"}>SHOES</Link>
      </div>
      <div className="second">
        <Image src={images[1]} fill={true} alt="men" />
        <Link href="/products/men">MEN</Link>
        
      </div>
      <div className="third">
        <Image src={images[2]} fill={true} alt="WOMEN" />
        <Link href="/products/women">WOMEN</Link>
      </div>
      <div className="fourth">
        <Image src={images[3]} fill={true} alt="SALE" />
        <Link href="/products/sale">SALE</Link>
      </div>
      <div className="fifth">
        <Image src={images[4]} fill={true} alt="ACCESSORIES" />
        <Link href="/products/accessories">ACCESSORIES</Link>
      </div>
      <div className="sixth">
      <Image src={images[5]} fill={true} alt="NEW SEASON" />
      <Link href="/products/newseason">NEW SEASON</Link>
      </div>
    </div>
  );
}

export default Categories