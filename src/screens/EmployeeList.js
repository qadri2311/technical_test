import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      data: [1, 2, 3, 4, 5, 6, 7],

      list: [],
    };
    this.url = 'http://192.168.18.10/ttest_dexa/getEmployee.php';
  }

  componentDidMount() {
    this.getEmployee();
  }

  async getEmployee() {
    await fetch(this.url)
      .then(Response => Response.json())
      .then(json => {
        console.log('result: ' + JSON.stringify(json));
        this.setState({list: json});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* // FlatList */}
        <View
          style={{
            marginTop: 30,
            backgroundColor: 'white',
            alignSelf: 'baseline',
            marginTop: 40,
            marginHorizontal: 20,
            padding: 10,
            borderColor: '#F38181',
            borderWidth: 3,
            borderRadius: 10,
          }}>
          <Text>employee list</Text>
        </View>
        <FlatList
          style={{flex: 1, marginTop: 20}}
          data={this.state.list}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: 'white',

                marginTop: 10,
                marginHorizontal: 20,
                padding: 10,
                borderColor: '#BBDED6',
                borderWidth: 3,
                borderRadius: 10,
              }}>
              <Text>First Name: {item.front_name}</Text>
              <Text>Last Name: {item.back_name}</Text>
              <Text>No Ktp: {item.noKtp}</Text>
              <Text>Gender: {item.gender}</Text>
              <Text>Birth Date: {item.birth_date}</Text>
              <Text>Hometown: {item.hometown}</Text>
            </View>
          )}
        />

        {/* back button */}
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 30,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text
              style={{
                backgroundColor: '#D9C6A5',
                paddingVertical: 10,
                paddingHorizontal: 30,
                fontSize: 25,
                color: 'white',
                borderRadius: 10,
              }}>
              back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmployeeList;
