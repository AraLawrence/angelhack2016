import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SetMatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {this.props.placeName}
        </Text>
        <Text style={styles.textStyle}>
          {this.props.status}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 60,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'grey'
  },
  textStyle: {
    fontSize: 20
  }
});

module.exports = SetMatch;
