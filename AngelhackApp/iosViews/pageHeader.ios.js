import React, {
  AppRegistry,
  Component,
  Image,
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
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 80,
    backgroundColor: "#f0f3f5",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    paddingTop: 12,
    marginLeft: 20
  },
  logo: {
    marginTop: 90,
    alignSelf: 'center'
  }
});

module.exports = PageHeader;
