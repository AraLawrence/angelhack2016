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
      this.props.navigator.pop();
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.navButton}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>INPUT</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Wel
        </Text>
        <Text style={styles.welcome}>
          Wel
        </Text>
        <Text style={styles.welcome}>
          Wel
        </Text>
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
    borderColor: 'black',
    borderWidth: 1
  }
});

module.exports = BottomNav;
