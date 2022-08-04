import {Picker} from '@react-native-picker/picker';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class AddEmploye extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      no_Ktp: '',
      birth_date: new Date(),
      formated_date: new Date(),
      hometown: '',
      gender: '',
      calender_show: false,
    };
    this.updateGender = gender => {
      this.setState({gender: gender});
    };
  }

  InsertRecord = () => {
    var no_Ktp = this.state.no_Ktp;
    var first_name = this.state.first_name;
    var last_name = this.state.last_name;
    var birth_date = this.state.birth_date;
    var hometown = this.state.hometown;
    var gender = this.state.gender;

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
      var inserApiURL = 'http://192.168.18.10/ttest_dexa/insertEmployee.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application.json',
      };

      var Data = {
        no_Ktp: no_Ktp,
        first_name: first_name,
        last_name: last_name,
        birth_date: birth_date,
        hometown: hometown,
        gender: gender,
      };

      fetch(inserApiURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(Response => Response.json())
        .then(Response => {
          alert(Response[0].Message);
          if (Response[0].Message == 'Success') {
            console.log('true');
            this.props.navigation.navigate('Home');
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
      <View style={{flex: 1}}>
        {/* body */}
        <View style={{backgroundColor: '#61C0BF'}}>
          <ImageBackground
            style={{
              height: 800,
            }}
            source={{
              uri: 'https://media.istockphoto.com/photos/spiderweb-picture-id615747714?b=1&k=20&m=615747714&s=170667a&w=0&h=GjbGYKWJNSRJjuXR6jUriIMCbKJXlcpdgmqKTcU5ik8=',
            }}
            resizeMode="cover">
            <View style={{flexDirection: 'row'}}>
              {/* back button */}

              <View style={{marginLeft: 10, marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/189/189254.png',
                    }}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              {/* name & ktp & gender & date_birth & ttl & kotakelahiran */}
              <View
                style={{
                  backgroundColor: 'white',

                  marginTop: 40,
                  marginHorizontal: 20,
                  padding: 10,
                  borderColor: '#BBDED6',
                  borderWidth: 3,
                  borderRadius: 10,
                }}>
                {/* firstname & lastname */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 20,
                  }}>
                  {/* first_name */}
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: '#F38181',
                      borderRadius: 10,
                      marginRight: 10,
                      paddingHorizontal: 20,
                    }}>
                    <TextInput
                      placeholder="First Name"
                      onChangeText={first_name =>
                        this.setState({first_name: first_name})
                      }
                      style={{
                        paddingHorizontal: 20,
                      }}
                    />
                  </View>
                  {/* last name */}
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: '#F38181',
                      borderRadius: 10,
                      marginLeft: 10,
                      paddingHorizontal: 20,
                    }}>
                    <TextInput
                      placeholder="Last Name"
                      onChangeText={last_name =>
                        this.setState({last_name: last_name})
                      }
                      style={{
                        paddingHorizontal: 20,
                      }}
                    />
                  </View>
                </View>
                {/* no ktp */}
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: '#F38181',
                    borderRadius: 10,
                    marginTop: 30,
                    marginHorizontal: 10,
                  }}>
                  <TextInput
                    placeholder="No KTP"
                    onChangeText={no_Ktp => this.setState({no_Ktp: no_Ktp})}
                    style={{
                      paddingHorizontal: 20,
                    }}
                  />
                </View>
                {/* gender */}
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: '#F38181',
                    borderRadius: 10,
                    marginTop: 30,
                    marginHorizontal: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.gender}
                    onValueChange={this.updateGender}>
                    <Picker.Item label="Gender" value="" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker>
                </View>
                {/* birth date_birth */}

                {this.state.calender_show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.birth_date}
                    mode={'date'}
                    format={'YYYY-MM-DD'}
                    is24Hour={true}
                    onChange={(event, date) => {
                      this.setState({calender_show: false});
                      this.setState({birth_date: date});

                      console.log(this.state.birth_date);
                    }}
                  />
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 30,
                    marginHorizontal: 10,
                  }}>
                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    Birth Date:{' '}
                  </Text>
                  <Text style={{marginLeft: 10, fontSize: 14}}>
                    {this.state.birth_date.toISOString()}
                  </Text>
                  <TouchableOpacity
                    style={{marginLeft: 'auto'}}
                    onPress={() => this.setState({calender_show: true})}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/833/833593.png',
                      }}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {/* kota kotakelahiran */}
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: '#F38181',
                    borderRadius: 10,
                    marginTop: 30,
                    marginBottom: 20,
                    marginHorizontal: 10,
                  }}>
                  <TextInput
                    placeholder="Hometown"
                    onChangeText={hometown =>
                      this.setState({hometown: hometown})
                    }
                    style={{
                      paddingHorizontal: 20,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* tombolsubmit */}
            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.InsertRecord();
                  console.log(
                    this.state.first_name +
                      this.state.last_name +
                      this.state.no_Ktp +
                      this.state.gender +
                      this.state.birth_date +
                      this.state.hometown,
                  );
                }}>
                <Text
                  style={{
                    backgroundColor: '#D9C6A5',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    fontSize: 25,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default AddEmploye;
