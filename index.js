var colors = require('colors');
var env = require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');
const { dbConnect } = require('./src/utils/dbConnect');
dbConnect()

const lineSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Line = mongoose.model('Line', lineSchema);

app.post('/lines', async (req, res) => {
    try {
      const { text } = req.body;
     
      const line = new Line({ text });
      await line.save();
      res.status(201).json(line);
    } catch (error) { 
      res.status(500).json({ error: 'Failed to save line' });
    }
  });
  app.get('/lines', async (req, res) => {
    try {
     
      const line = await Line.find({})
      res.status(201).json(line);
    } catch (error) { 
      res.status(500).json({ error: 'Failed to save line' });
    }
  });

app.listen(process.env.PORT, () => {
    console.log(`port running on ${process.env.PORT}`.red);
})
 