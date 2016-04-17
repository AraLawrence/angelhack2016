import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

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
        <Text style={styles.welcome}>
          Your History
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>Input</Text>
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
  button: {
    backgroundColor: 'rgba(181, 165, 165, 0.79)'
  },
});

module.exports = HistoryView;
