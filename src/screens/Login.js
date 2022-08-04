import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
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
    };
  }

  InsertRecord = () => {
    var username = this.state.username;
    var password = this.state.password;

    if (username.length == 0 || password.length == 0) {
      alert('Required Field Is Missing!!!');
    } else {
      var APIURL = 'http://192.168.68.106/ttest_dexa/login.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        username: username,
        password: password,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(Response => Response.json())
        .then(Response => {
          alert(Response[0].Message);
          if (Response[0].Message == 'Success') {
            console.log('true');
            this.props.navigation.dispatch(StackActions.replace('Home'));
          }
          console.log(Data);
        })
        .catch(error => {
          console.error('ERROR FOUND' + error);
        });
    }
  };

  render() {
    return (
      // body
      <View style={style.constraint}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.text_header}>login Now</Text>
          <Text style={style.text}>
            Please login to continue using this app
          </Text>
        </View>
        {/* username & password */}
        <View style={style.border}>
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
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({password: password})}
              style={style.textInput}
            />
          </View>
          {/* login button */}
          <View style={style.button}>
            <TouchableOpacity
              onPress={() => {
                this.InsertRecord();
                console.log(this.state.username + ' ' + this.state.password);
              }}>
              <Text style={style.button_text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Register */}
        <View style={style.signupNlogin}>
          <Text>Don't have an acount? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Sign Up</Text>
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
