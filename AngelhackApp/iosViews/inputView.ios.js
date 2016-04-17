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
      item: '',
      place: '',
      qty: ''
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
        let hpeResponse = JSON.parse(responseText)
        fetch(`http://localhost:3000/item/scan?q=${hpeResponse.barcode[0].text}`)
        .then((response) => response.text())
        .then((serverResponse) => {
          let currentItem = JSON.parse(serverResponse);
          console.log(currentItem.attributes.Brand);
          this.setState({item: currentItem.attributes.Brand + " " + currentItem.attributes["Net Weight"], qty:"qty: 1"})
        })
        .catch((error) => {
          console.warn(error);
        });
      })
      .catch((error) => {
        console.warn(error);
      });
    };

    this.onMatchPress = () => {
      fetch(`http://localhost:3000/find_matching_charities`)
      .then((response) => response.text())
      .then((serverResponse) => {
        let findResponse = JSON.parse(serverResponse);
        let place = findResponse.matches;
        for(key in place) {
          console.log(key);
          place = key;
        }
        this.props.navigator.push({name: 'MatchView', place: place, qty: "1/25"});
      })
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
        <ItemAdded item={this.state.item} qty={this.state.qty}/>
        <TouchableHighlight
          style={styles.completeButton}
          onPress={this.onMatchPress}>
          <View>
            <Text style={styles.completeText}>Complete</Text>
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
    marginTop: 60,
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
    backgroundColor: '#85A0A8',
    color: 'white'
  },
  scanButton: {
    alignItems: 'center',
    backgroundColor: '#85A0A8',
    width: 170
  },
  camButton: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#85A0A8',
    color: 'white'
  },
  completeButton: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#85A0A8',
  },
  completeText: {
    fontSize: 20,
    color: 'white'
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  }
});

module.exports = InputView;
