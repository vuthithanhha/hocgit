genderchanger = () => {};

var websites = [
  "freetuts.net",
  "freetuts.net",
  "course.freetuts.net",
  "qa.freetuts.net",
];
console.log(websites);
setTimeout(function () {
  alert("chao mung ban den voi lap trinh web");
}, 1000);

//clearAlert(clearTimeout(do_alert));

function tinh() {
  // Lấy 3 ô input
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var result = document.getElementById("result");

  // Tính tổng hai ô đầu tiên
  var tong = parseInt(a.value) + parseInt(b.value);

  // Gán giá trị vào ô thứ ba
  // Phải kiểm tra tổng hai số này có bị lỗi hay không
  if (!isNaN(tong)) {
    result.value = tong;
  }
}

function validate() {
  // Lấy giá trị input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lấy đối tượng message
  var message = document.getElementById("message");

  // Validate
  if (username == "" || password == "") {
    message.innerHTML = "Bạn chưa nhập đầy đủ thông tin!";
    message.style.color = "red";
  } else {
    message.innerHTML = "Chúc mừng ban, validate thành công!";
    message.style.color = "blue";
  }
}

var promise = new Promise(function (resolve, reject) {
  resolve("Success!");
});
promise.then(function (success) {
  console.log(success);
});

const myObj = {
  name: "Skip",
  age: 2,
  favoriteFood: "Steak",
};

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
var a = "Hello";
var b = "World";

var text = `${a} ${b}`;
