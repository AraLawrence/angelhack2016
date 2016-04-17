import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = () => {
      console.log("nothing happens?");
    };
    this.onHomePress = () => {
      this.props.navigator.push({name: "HistoryView"});
    };
    this.onInventoryPress = () => {
      this.props.navigator.push({name: "InputView"});
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onHomePress}>
          <View>
            <Text style={styles.button}>Home</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onInventoryPress}>
          <View>
            <Text style={styles.button}>Inventory</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>Search</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>Profile</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navButton: {
    flex: 1,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  }
});

module.exports = BottomNav;
