
const stripe = require('stripe')('sk_test_51MvGRULyPagBwcPn1TU5Lz4zs5gtiPXOI0mu4fTuB0bCw2nVQaEx6kMhwLDTBYrtM4egGrYPDequW4jT9nxaP0LS00n9kJftIq');
 module.exports.payment = async(req,res)=>{
// StripePaymentView
  try {
    const {id} = req.body;
        
      //  await  statusPhotographerService(id,{activeStatus:'false'})
      const c_amount =12;
      const intent = await stripe.paymentIntents.create({
        amount: 100 * c_amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      // await Charge.create({
      //   // user: req.user,
      //   amount: c_amount,
      //   client_secret: intent.client_secret,
      //   payment_id: intent.id,
      // });
 
      res.status(200).json({
        message: 'Payment intent created successfully',
        amount: c_amount,
        payment_id: intent.id,
        client_secret: intent.client_secret,
        publish_key: 'pk_test_51MvGRULyPagBwcPn8cfry3uU9i9gGASSwjiGcTz10T4zUROjvtfdtuyx4NGQYwWX8gRqbAjFV3E9rW4B44WsP161006YllnuPM',
      });
  } catch (error) {
  res.status(400).json({
      error: error.toString(),
    });
  }
 }
 module.exports.paymentConfirm =async(req,res)=>{
try {
      const { payment_id } = req.body;
       
        res.status(201).json({
          message: 'You successfully subscribed',
          data: {
             id:"t  id"
          },
        });
      }  
  catch (error) {
 
    res.status(401).json({
          message: 'You successfully subscribed',
          data: {
             id:"this is back id"
          },
        });
}
 }