import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ResultMatchView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        MATCH PREFERENCES
        </Text>
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
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = ResultMatchView;
