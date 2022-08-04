

# technical_test

Employee list for mobile app

project nya ada di branch react-native

untuk menjalankan project sesuaikan dulu apiurl pada Login.js, Register.js, AddEmployee.js, EmployeeList.js . file ini tersimpan pada technicalTest/src/screens

apiurl terdapat di:

InsertRecord = () => {


    if (
      no_Ktp.length == 0 ||
      first_name.length == 0 ||
      last_name.length == 0 ||
      birth_date.length == 0 ||
      hometown.length == 0 ||
      gender.length == 0
    ) {
      alert('Required Field Is Missing!!!');
    } else {
      var inserApiURL = 'http://192.168.18.10/ttest_dexa/insertEmployee.php';   ----------> api url nya disini

      ...
  };

  karena saya menggunakan database mysql dari xampp backEnd PHP nya saya masukkan ke folder C:\xampp\htdocs\ttest_dexa pada local device saya
