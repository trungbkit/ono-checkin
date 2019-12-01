const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/members', (req, res) => {
  const members = controller.members;
  return res.send({ members });
});

router.post('/member', (req, res) => {
  const { member } = req.body;
  controller.addMember(member);
  return res.send({ message: 'SUCCESS' })
});

router.delete('/member', (req, res) => {
  const { id } = req.body;
  controller.removeMember(id);
  return res.send({ message: 'SUCCESS' });
});

module.exports = router;
