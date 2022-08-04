import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      //   iconbarr
      <View style={{flex: 1}}>
        {/* header */}
        <ImageBackground
          style={{
            height: 450,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={{
            uri: 'https://media.istockphoto.com/photos/spiderweb-picture-id615747714?b=1&k=20&m=615747714&s=170667a&w=0&h=GjbGYKWJNSRJjuXR6jUriIMCbKJXlcpdgmqKTcU5ik8=',
          }}
          resizeMode="cover">
          {/* quote */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 20,
              borderColor: '#D9C6A5',
              borderWidth: 3,
            }}>
            <Text>Hi,</Text>
            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              “We cannot solve problems {'\n'}
              with the kind of thinking weemployed{'\n'}
              when we came up with them.” — Albert Einstein
            </Text>
          </View>
        </ImageBackground>

        {/* body */}
        <View>
          <View style={{alignItems: 'center', marginTop: -28}}>
            <Text
              style={{
                backgroundColor: '#D9C6A5',
                paddingVertical: 10,
                paddingHorizontal: 30,
                fontSize: 25,
                color: 'white',
                borderRadius: 20,
              }}>
              Home
            </Text>
          </View>

          {/* addemploye & list */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            {/* add employee*/}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddEmployee')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2891/2891421.png',
                }}
                style={{
                  width: 80,
                  height: 80,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>

            {/* list */}
            <TouchableOpacity
              style={{}}
              onPress={() => this.props.navigation.navigate('EmployeeList')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/354/354001.png',
                }}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 100,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
