import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import PageHeader from './pageHeader.ios.js';
import BottomNav from './bottomNav.ios.js';
import SetMatch from './setMatchComp.ios.js';

class HistoryView extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = () => {
      this.props.navigator.push({name: 'InputView'});
    };
    this.loadHistory = () => {
      console.log("loading history");
      // API_TODO this is where we will get the users history and store it in the
      // state variable that I have defined above. We will need to create a Component
      // for this, which gets loaded on the function call
    }
  }

  render() {
    console.log(this.props)
    if (!this.props.placeName) {
      return (
        <View style={styles.container}>
          <PageHeader navigator={this.props.navigator}/>
          <Text style={styles.welcome}>
            HOME
          </Text>
          <Text>
            Add an order +
          </Text>
          <View style={styles.bottom}>
            <BottomNav navigator={this.props.navigator}/>
          </View>
        </View>
      );
    } else {
      console.log(this.props);
      return (
        <View style={styles.container}>
          <PageHeader navigator={this.props.navigator}/>
          <Text style={styles.welcome}>
            HOME
          </Text>
          <SetMatch placeName={this.props.placeName} status={this.props.status} />
          <View style={styles.bottom}>
            <BottomNav navigator={this.props.navigator}/>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f0f3f5"
  },
  welcome: {
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    textAlign: 'center',
    margin: 10,
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  },
});

module.exports = HistoryView;
