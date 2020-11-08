const Card = require("../models/Card");
const Repeat = require("../models/Repeat");
const { supermemo } = require("supermemo");
const dayjs = require("dayjs");

module.exports = {
  newCard: async (req, res, next) => {
    const stack = req.stack;

    const newCard = new Card(req.body);
    await newCard.save();

    const newRepeat = new Repeat({
      schedule: dayjs().format(),
      repetition : {
      interval: 0,
      efactor: 2.5,
        repetition: 0,
      },
      card: newCard,
      stack: req.stack,
      user: req.user,
    });

    newRepeat.save();

    await stack.cards.push(newCard);
    stack.save();

    res.sendStatus(201);
  },
  deleteCard: async (req, res, next) => {
    const stack = req.stack;
    console.log(stack);
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
  updateCard: async (req, res, next) => {
    await Card.update(req.card, req.body);
    res.sendStatus(200);
  },
  findCard: async (req, res, next) => {
    if (req.params.cardId) {
      const index = req.stack.cards.indexOf(req.params.cardId);

      if (index != -1) {
        req.card = await Card.findOne(req.stack.cards[index]);
        next();
      } else res.sendStatus(404);
    } else next();
  },
  getCards: async (req, res, next) => {
    let ids = [];
    let stackNames = [];
    if (req.stacks) {
      req.stacks.forEach((stack) => {
        stack.stack.cards.forEach((id) => {
          ids.push(id);
          stackNames.push(stack.stack.name);
        });
      });
      console.log(ids, stackNames);
      const cards = await Card.find({ _id: { $in: ids } });
      cards.forEach((card, index) => {
        cards[index] = card.toObject();
        cards[index].stack = stackNames[index];
      });
      res.send(cards);
    }
  },
  getTodaysCards: async (req, res, next) => {
    let ids = [];
    let stackNames = [];
    if (req.stacks) {
      req.stacks.forEach((stack) => {
        if (stack.subscribed) {
          stack.stack.cards.forEach((id) => {
            ids.push(id);
            stackNames.push(stack.stack.name);
          });
        }
      });
      console.log(ids, stackNames);
      const cards = await Repeat.find({
        card: { $in: ids },
        schedule: { $lt: dayjs().format() },
        user: req.user,
      })
        .populate("card")
        .populate("stack", "name");
      res.send(cards);
    }
  },
  spaceCard: async (req, res, next) => {
    const repeat = await Repeat.findById(req.params.id);
    repeat.repetition = supermemo(repeat.repetition, req.params.grade)
    repeat.schedule = dayjs().add(repeat.repetition.interval, 'day').format("YYYY-MM-DD");
    repeat.save();
    res.sendStatus(200)
  }
};
