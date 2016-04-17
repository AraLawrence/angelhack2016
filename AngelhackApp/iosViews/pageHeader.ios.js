import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = () => {
      this.props.navigator.pop();
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>BACK</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    paddingTop: 12,
    marginLeft: 20
  }
});

module.exports = PageHeader;
