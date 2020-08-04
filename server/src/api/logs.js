const router = require('express').Router();

const LogEntry = require('../models/LogEntry');

router.get('/', async (_, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
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

router.delete('/:logId', async (req, res, next) => {
  try {
    const deletedLog = await LogEntry.deleteOne({
      id: req.params.id,
    });
    res.status(202);
    res.json(deletedLog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
