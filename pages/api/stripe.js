import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51MudsQSFvRCQ4Fy5oLFcEhhmWumtLmmUXwk0UNmW5N6S77SVW1r7gBLySLMzXKVKSxaa6z617u2j7OIrHFEUfoSH00PsyUmqFw"
)

export default async function handler(req, res) {
    if(req.method == 'POST')
    {
        try{
            const params = {
                submit_type: 'pay',
                mode: "payment",
                payment_method_types: ['card'],
                line_items: req.body.map((item)=> {
                    const img = item.image.asset._ref;
                    const newImage = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/l9gfuueb/production/"
                    )
                    .replace('-jpg', '.jpg');
                    const size = item.size === 0 ? "Single": item.size === 1 ?  "Full":  "Bucket"
                    const price = item.size === 0 ? item.price[0]: item.size === 1 ? item.price[1]: item.price[2]
                    return{
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: item.name + " (" + size + ")", 
                                images: [newImage],
                            },
                            unit_amount: price * 100
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity: item.quantity,
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            };

            // checkout session

            const session = await stripe.checkout.sessions.create(params);
            // console.log(session)
            res.status(200).json(session)

        }
        catch(error)
        {
            res.status(500).json(error.message)
        }
    }else{
        res.setHeader("Allow","POST");
        res.status(405).end("method not allowed")
    }
}