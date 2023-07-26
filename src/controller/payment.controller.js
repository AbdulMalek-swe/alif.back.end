
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const twilio = require('twilio');
const { paymentService } = require('../service/payment.service');

 module.exports.payment = async(req,res)=>{
// StripePaymentView
  try { 
    const {id} = req.body;
        const {email} = req.body.address;
        console.log(email);
        const c_amount = await paymentService(req.body.order)
       
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
        publish_key: process.env.STRIPE_PUBSLISHED_KEY,
      });
  } catch (error) { 
    console.log(error.message);
  res.status(400).json({
      error: error.toString(),
    });
  }
 }
 module.exports.paymentConfirm =async(req,res)=>{
try {
      const { payment_id } = req.body;
          console.log(req.body);
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
//  +12345163992


// phone sms recieve code here 

  //    console.log(req.body.c.length);
      //    const client = twilio('ACd5ac0ca1c1302895a8478f9f01f730b3', '0faeb03044364d53c1ba9414c789852e');
      //    console.log(client);
      //    const verification = await client.verify.services('VA21a8f24fa958f570aaef77de2efcb09b')
      // .verifications
      // .create({ to: '+8801977528702', channel: 'sms' });

      //    const message = await client.messages.create({
      //     body: 'Payment has been successfully completed.',
      //     from: '+12345163992',
      //     to: '+8801977528702',
      //   });
        // console.log('Message sent:', verification.sid);
      //  await  statusPhotographerService(id,{activeStatus:'false'})