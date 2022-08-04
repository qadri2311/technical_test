import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
    };
  }

  insertUser = () => {
    var name = this.state.name;
    var username = this.state.username;
    var password = this.state.password;

    if (username.length == 0 || password.length == 0 || name.length == 0) {
      alert('require data');
    } else {
      var inserApiURL = 'http://192.168.68.106/ttest_dexa/registerUser.php';

      var header = {
        Accept: 'application/json',
        'Content-Type': 'application.json',
      };

      var Data = {
        name: name,
        username: username,
        password: password,
      };

      fetch(inserApiURL, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(Data),
      })
        .then(response => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then(response => {
          alert('register success'); // If data is in JSON => Display alert msg
          this.props.navigation.navigate('Login'); //Navigate to next screen if authentications are vali
        })
        .catch(err => {
          alert('error : ' + err);
        });
    }
  };

  render() {
    return (
      // body
      <View style={style.constraint}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.text_header}>Getting Started</Text>
          <Text style={style.text}>
            Create an acount to access all features
          </Text>
        </View>
        {/* nama & username & password */}
        <View style={style.border}>
          {/* nama */}
          <View style={style.textInput_const}>
            <TextInput
              placeholder="Name"
              onChangeText={name => this.setState({name: name})}
              style={style.textInput}
            />
          </View>
          {/* username */}
          <View style={style.textInput_const}>
            <TextInput
              placeholder="Username"
              onChangeText={username => this.setState({username: username})}
              style={style.textInput}
            />
          </View>
          {/* password */}
          <View style={style.textInput_const}>
            <TextInput
              placeholder="assword"
              secureTextEntry={true}
              onChangeText={password => this.setState({password: password})}
              style={style.textInput}
            />
          </View>
          {/* signup button */}
          <View style={style.button}>
            <TouchableOpacity onPress={() => this.insertUser()}>
              <Text style={style.button_text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* login */}
        <View style={style.signupNlogin}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  constraint: {
    flex: 1,
    justifyContent: 'center',
  },
  text_header: {
    fontSize: 25,
  },
  text: {
    fontSize: 15,
  },
  signupNlogin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  button_text: {
    backgroundColor: '#D9C6A5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 25,
    color: 'white',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    paddingHorizontal: 20,
  },
  textInput_const: {
    borderWidth: 3,
    borderColor: '#F38181',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  border: {
    backgroundColor: 'white',

    marginTop: 20,
    marginHorizontal: 40,
    padding: 10,
    borderColor: '#BBDED6',
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default Login;
