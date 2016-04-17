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
        <Text>
          {this.props.placeName}
        </Text>
        <Text>
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
    height: 40,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'grey'
  },
});

module.exports = SetMatch;
