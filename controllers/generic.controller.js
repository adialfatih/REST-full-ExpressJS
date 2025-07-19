const service = require('../services/generic.service');

exports.getAll = async (req, res) => {
  const { table } = req.params;
  const { search, date, page = 1, limit = 20 } = req.query;

  try {
    const data = await service.getAll(table, search, date, page, limit);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
};

exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.table, req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await service.create(req.params.table, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await service.update(req.params.table, req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await service.remove(req.params.table, req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
