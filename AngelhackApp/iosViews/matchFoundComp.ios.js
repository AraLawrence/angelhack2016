import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MatchFound extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          Hi!
        </Text>
        <Text >
          25/25 items
        </Text>
        <Text >
          2 miles away
        </Text>
        <View style={styles.bottom}>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBox}>
            </View>
            <View style={styles.bottomBox}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f3f5",
    borderWidth: 1,
    borderColor: 'grey',
    width: 250,
    height: 250,
  },
  head: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  },
  bottomContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bottomBox: {
    width: 124,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey'
  }
});

module.exports = MatchFound;
