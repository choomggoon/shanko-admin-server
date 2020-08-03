var dbConn = require("./../../config/db.config");
//UserLog object create
var UserLog = function(userLog) {
  this.gameid = userLog.gameid;
  this.userid = userLog.userid;
  this.bet = userLog.bet;
  this.win = userLog.win;
  this.balanceBefore = userLog.balanceBefore;
  this.balanceAfter = userLog.balanceAfter;
  this.cards = userLog.cards;
  this.isBanker = userLog.isBanker;
};

UserLog.findById = function(id, result) {
  dbConn.query(
    "Select * from gamelog_users where userid = ? order by gameid desc",
    id,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = UserLog;
