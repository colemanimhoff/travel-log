const router = require('express').Router();

const LogEntry = require('../models/LogEntry');

router.get('/', (_, res) => {
  res.status(200);
  res.json({
    message: 'fuckkkkk',
  });
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = await new LogEntry(req.body);
    const createdLogEntry = await logEntry.save();
    res.status(201);
    res.json(createdLogEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
