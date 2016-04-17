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
// TODO don't rerender this everytime
import PageHeader from './pageHeader.ios.js';
import BottomNav from './bottomNav.ios.js';
import ItemAdded from './itemAddedComp.ios.js';

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
        <PageHeader navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          INVENTORY
        </Text>
        <View style={styles.upcInput}>
          <TextInput
            placeholder="UPC"
            style={styles.inputBox}
            onChangeText={(upc) => this.setState({upc})}
            value={this.state.nameText}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onCameraPress}>
            <View>
              <Text style={styles.camButton}>CAM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button, styles.scanButton}
            onPress={this.onSubmitPress}>
            <View>
              <Text style={styles.scan}>SUBMIT</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ItemAdded />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onMatchPress}>
          <View>
            <Text style={styles.button}>MATCH!</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.bottom}>
          <BottomNav navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f3f5",
  },
  welcome: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  upcInput: {
    height: 85,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'rgba(175, 162, 162, 0.79)',
    alignSelf: 'stretch'
  },
  inputBox: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: "#f0f3f5",
    justifyContent: 'center',
    alignSelf: 'center',
  },
  scan: {
    backgroundColor: 'black',
    color: 'white'
  },
  scanButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 170
  },
  camButton: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'black',
    color: 'white'
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  }
});

module.exports = InputView;
