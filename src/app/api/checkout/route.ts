import { ProductType } from "@/app/redux/cartReducer";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    //@ts-ignore
    let stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    let { items, email } = await req.json();
    let itemsExtracted = items.map((item: ProductType) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 87,
        product_data: {
          name: item.title,
          description: item.description,
          // image: item.images,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: itemsExtracted,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });
    return NextResponse.json({ msg: "success", id: session.id });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
}
