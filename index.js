var colors = require('colors');
var env = require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');
const { dbConnect } = require('./src/utils/dbConnect');
dbConnect()
 
   
 
const paypal = require('paypal-rest-sdk');
 

// Replace these with your PayPal API credentials
paypal.configure({
  mode: 'sandbox', // 'sandbox' or 'live'
  client_id: 'AWS3NJ4ElTmb4wb8nrnAJuAbAi-6W1kysTi5qCopqYNbdUzgrTC_S7Hy7ZUffJ9trGJ0YnuSXphz6qnF',
  client_secret: 'EEvhUGPOn8ewsoBzYrTSl6ghJpQva-O6pBa_leRikmZow72I0cj6aXiPh1RDAWkg7kFTKtELn8I5Exnb',
});

// Create a simple route to initiate the payment process
app.get('/paypal', (req, res) => {
   
  try {
    const paymentData = {
        intent: 'sale',
        payer: {
          payment_method: 'paypal',
        },
        redirect_urls: {
          return_url: 'http://localhost:3000/execute-payment',
          cancel_url: 'http://localhost:3000/cancel-payment',
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: 'Sample Item',
                  sku: 'ITEM001',
                  price: '10.00',
                  currency: 'USD',
                  quantity: 1,
                },
              ],
            },
            amount: {
              total: '10.00',
              currency: 'USD',
            },
            description: 'Sample item description',
          },
        ],
      };
    
      paypal.payment.create(paymentData, (error, payment) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error creating payment.');
        } else {
          // Redirect the user to PayPal for payment approval
          for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
              res.redirect(payment.links[i].href);
            }
          }
        }
      });
  } catch (error) {
     console.log(error.message);
  }
});

// Handle the payment execution after user approval
app.get('/execute-payment', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const executePaymentDetails = {
    payer_id: payerId,
  };

  paypal.payment.execute(paymentId, executePaymentDetails, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error executing payment.');
    } else {
      // Payment was successful, you can perform additional actions here.
      res.send('Payment successful! Thank you for your purchase.');
    }
  });
});

 





 




app.listen(process.env.PORT, () => {
    console.log(`port running on ${process.env.PORT}`.red);
})
 