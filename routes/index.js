const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', async (req, res, next) => {
  try {
    const docs = await global.db.findAll();
    res.render('index', { title: 'Clients List', docs });
  } catch (err) {
    next(err);
  }
});

// GET register page.
router.get('/new-client', (req, res, next) => {
  res.render('newClient', { title: 'New register', doc: {"name":"", "age":""}, action: '/new-client' });
});

// POST register page.
router.post('/new-client', async (req, res, next) => {
  const name = req.body.name;
  const age = parseInt(req.body.age);

  try {
      const result = await global.db.insert({ name, age });
      console.log(result);
      res.redirect('/');
  } catch (err) {
      next(err);
  }
});

// GET edit page.
router.get('/edit/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const doc = await global.db.findOne(id);
    res.render('newClient', { title: 'Edit register', doc, action: "/edit/" + doc._id });
  } catch (err) {
    next(err);
  }
});

// POST edit page.
router.post('/edit/:id', async (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = parseInt(req.body.age);

  try {
    const result = await global.db.update(id, { name, age });
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// GET delete page.
router.get('/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await global.db.deleteOne(id);
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;