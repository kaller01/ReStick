const Card = require("../models/Card");

module.exports = {
  newCard: async (req, res, next) => {
    const stack = req.stack;

    const newCard = new Card(req.body);
    await newCard.save();

    await stack.cards.push(newCard);
    stack.save();

    res.sendStatus(201);
  },
  deleteCard: async(req, res, next) => {
    const stack = req.stack;
    console.log(stack)
    const cardIndex = stack.cards.indexOf(req.params.cardId);

    //If the card isnt found within the stack
    if (cardIndex == -1) {
        res.sendStatus(404);
        next();
    }

    stack.cards.splice(cardIndex, 1);

    stack.save();

    console.log(stack);
    res.sendStatus(200);
  },
  updateCard: async(req,res,next) => {
    await Card.update(req.card, req.body)
    res.sendStatus(200);
  },
  findCard: async(req,res,next) => {
    if(req.params.cardId){
        const index = req.stack.cards.indexOf(req.params.cardId);

        if(index != -1){
            req.card = await Card.findOne(req.stack.cards[index])
            next();
        } else res.sendStatus(404)
    } else next();
  }
};
