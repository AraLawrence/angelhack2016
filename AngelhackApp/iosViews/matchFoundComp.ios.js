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
      // Here we should post order status to db
      this.props.navigator.push({name: 'HistoryView', placeName: this.props.place, status: "pending"});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          {this.props.place}
        </Text>
        <Text >
          {this.props.qty}
        </Text>
        <View style={styles.bottom}>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBoxLeft}>
              <Text style={styles.boldText}>No</Text>
            </View>
            <View style={styles.bottomBoxRight}>
              <TouchableHighlight
                onPress={this.onSubmitPress}
                style={this.matchElement}>
                <View>
                  <Text style={styles.boldText}>Yes</Text>
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
  matchElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBoxLeft: {
    width: 124,
    height: 40,
    backgroundColor: "rgb(238, 99, 132)",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },
  bottomBoxRight: {
    width: 124,
    height: 40,
    backgroundColor: "rgb(62, 215, 142)",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },
  boldText: {
    fontWeight: 'bold'
  }
});

module.exports = MatchFound;
