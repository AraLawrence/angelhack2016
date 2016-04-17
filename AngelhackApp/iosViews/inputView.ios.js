import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class InputView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upc: '',
    };
    this.onCameraPress = () => {
      this.props.navigator.push({name: 'CameraView'});
    };
    this.onHistoryPress = () => {
      this.props.navigator.pop();
    };
    this.onSubmitPress = () => {
      let oReq = new XMLHttpRequest();
      oReq.open("POST", "http://localhost:3000/user/create", true);
      oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Input View!
        </Text>
        <TextInput
          placeholder="UPC"
          style={styles.inputBox}
          onChangeText={(upc) => this.setState({upc})}
          value={this.state.nameText}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmitPress}>
          <View>
            <Text style={styles.button}>Check</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onCameraPress}>
          <View>
            <Text style={styles.button}>Add through Camera</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onHistoryPress}>
          <View>
            <Text style={styles.button}>Back to history</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputBox: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'rgba(181, 165, 165, 0.79)'
  },
});

module.exports = InputView;
