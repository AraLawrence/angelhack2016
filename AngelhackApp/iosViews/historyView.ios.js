import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import PageHeader from './pageHeader.ios.js';

class HistoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: '',
    };
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
    this.loadHistory();
    return (
      <View style={styles.container}>
        <PageHeader navigator={this.props.navigator}/>
        <Text style={styles.welcome}>
          HOME
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>INPUT</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
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
  button: {
      backgroundColor: 'rgba(181, 165, 165, 0.79)'
  },
});

module.exports = HistoryView;
