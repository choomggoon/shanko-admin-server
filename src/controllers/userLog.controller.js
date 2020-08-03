const UserLog = require("../models/userLog.model");

exports.findById = function(req, res) {
  UserLog.findById(req.params.id, function(err, userLog) {
    if (err) res.send(err);
    res.json(userLog);
  });
};
