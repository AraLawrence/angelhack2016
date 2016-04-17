import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class MatchFound extends Component {
  constructor(props) {
    super(props);

    this.onSubmitPress = () => {
      this.props.navigator.push({name: 'HistoryView', placeName: this.props.place, status: "pending"});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          Hi!
        </Text>
        <Text >
          {this.props.place}
        </Text>
        <Text >
          {this.props.qty}
        </Text>
        <View style={styles.bottom}>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBox}>
              <Text>Reject</Text>
            </View>
            <View style={styles.bottomBox}>
              <TouchableHighlight
                onPress={this.onSubmitPress}>
                <View>
                  <Text>submit</Text>
                </View>
              </TouchableHighlight>
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
