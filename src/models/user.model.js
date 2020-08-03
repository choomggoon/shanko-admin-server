var dbConn = require("./../../config/db.config");
//Users object create
var User = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.username = user.username;
  this.fullname = user.fullname;
  this.nickname = user.nickname;
  this.balance = user.balance;
  this.total_deposit = user.total_deposit;
  this.status = user.status;
  this.phone = user.phone;
  this.user_type = user.user_type;
  this.gender = user.gender;
  this.imgnumber = user.imgnumber;
  this.win = user.win;
  this.lose = user.lose;
  this.created_at = user.created_at;
  this.updated_at = user.updated_at;
};
User.create = function(newUser, result) {
  dbConn.query("INSERT INTO users set ?", newUser, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function(id, result) {
  dbConn.query("Select * from users where id = ? ", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = function(result) {
  dbConn.query("Select * from users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};
User.update = function(id, user, result) {
  dbConn.query(
    "UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?",
    [
      user.first_name,
      user.last_name,
      user.email,
      user.phone,
      user.organization,
      user.designation,
      user.salary,
      id
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = User;
