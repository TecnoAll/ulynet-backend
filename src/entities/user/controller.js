const { verifyAuth } = require('agradon/lib/services/auth/utils');

module.exports = router => {
  router.get('/me', verifyAuth(), (req, res) => {
    res.send(req.user);
  });
};
