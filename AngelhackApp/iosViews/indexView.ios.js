import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomProp: '',
    };
    this.onButtonPress = () => {
      this.props.navigator.push({name: 'HistoryView'});
    };
  }

  componentWillMount() {
    console.log(this.props.navigator);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Match App
        </Text>
        <Text style={styles.instructions}>
          Match App
        </Text>
        <TextInput
          placeholder="First name"
          style={styles.inputBox}
          onChangeText={(nameText) => this.setState({nameText})}
          value={this.state.nameText}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputBox}
          onChangeText={(lastNameText) => this.setState({lastNameText})}
          value={this.state.lastNameText}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.button}>Sign in!</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  inputBox: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'rgba(181, 165, 165, 0.79)'
  },
});

module.exports = IndexView;
