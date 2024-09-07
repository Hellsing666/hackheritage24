const express = require('express');
const stripe = require('stripe')('your_secret_key_here');  // Replace with your Stripe secret key
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { items } = req.body;
    
    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.amount,  // Amount in cents
            },
            quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: 'http://localhost:3000/success.html',
        cancel_url: 'http://localhost:3000/cancel.html',
    });

    res.json({ id: session.id });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
