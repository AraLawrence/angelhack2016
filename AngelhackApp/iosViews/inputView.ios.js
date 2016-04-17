import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import HPE_KEY from '../keys/keys.js';

// read image here from imgur upload, later access from camera roll
var image = "http://i.imgur.com/0Qiy5I7.jpg"

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
      // API_TODO on successful submit here we will want to add to db and then render a Component
      // that contains the amount and right now I am directing to OrderListView, if possible
      // we should add a modal rather than that

      let url = `https://api.havenondemand.com/1/api/sync/recognizebarcodes/v1?apikey=${HPE_KEY}&url=${image}`;

      fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText)
        this.props.navigator.push({nane: 'ResultMatchView'})
      })
      .catch((error) => {
        console.warn(error);
      });
    };
    this.onMatchPress = () => {
      console.log("nothing here yet");
      this.props.navigator.push({name: 'MatchView'})
      // API_TODO this button should run the match algorithm and then render the
      // match screen which I have yet to build
    }
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
        <TouchableHighlight
          style={styles.button}
          onPress={this.onMatchPress}>
          <View>
            <Text style={styles.button}>MATCH!</Text>
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
