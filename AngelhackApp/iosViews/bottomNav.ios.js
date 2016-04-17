import React, {
  AppRegistry,
  Component,
  Image,
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
          <Image
            style={styles.logo}
            source={require('../assets/home_125.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onInventoryPress}>
          <Image
            style={styles.logo}
            source={require('../assets/inventory_125.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onButtonPress}>
          <Image
            style={styles.logo}
            source={require('../assets/profile_125.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onButtonPress}>
          <Image
            style={styles.logo}
            source={require('../assets/search_125.png')}
          />
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
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  // logo: {
  //   width: 20
  // }
});

module.exports = BottomNav;
