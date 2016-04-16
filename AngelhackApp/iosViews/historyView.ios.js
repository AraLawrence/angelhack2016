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
    this.onButtonPress = () => {
      this.props.navigator.pop();
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your History
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>Back to home</Text>
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
    backgroundColor: 'white',
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
