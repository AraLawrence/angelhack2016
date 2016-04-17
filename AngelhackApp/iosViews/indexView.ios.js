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
      nameText: '',
      emailText: '',
    };
    this.onButtonPress = () => {
      this.props.navigator.push({name: 'HistoryView'});
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SIGN IN / REGISTER
        </Text>
        <TextInput
          placeholder="FULL NAME"
          style={styles.inputBox}
          onChangeText={(nameText) => this.setState({nameText})}
          value={this.state.nameText}
        />
        <TextInput
          placeholder="EMAIL"
          style={styles.inputBox}
          onChangeText={(emailText) => this.setState({emailText})}
          value={this.state.lastNameText}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onButtonPress}>
          <View>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: "Helvetica Neue",
    fontWeight: 'bold',
    marginTop: 60,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  inputBox: {
    fontFamily: "Helvetica Neue",
    height: 40,
    fontSize: 14,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'rgba(181, 165, 165, 0.79)',
    borderRightColor: '#F5FCFF',
    borderLeftColor: '#F5FCFF',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'black',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: "Helvetica Neue",
    color: "#F5FCFF"
  }
});

module.exports = IndexView;
