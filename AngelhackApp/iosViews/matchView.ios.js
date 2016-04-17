import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PageHeader from './pageHeader.ios.js';
import BottomNav from './bottomNav.ios.js';
import MatchFound from './matchFoundComp.ios.js';

class MatchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      qty: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PageHeader navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          MATCH RESULTS
        </Text>
        <MatchFound place={this.props.place} qty={this.props.qty} navigator={this.props.navigator}/>
        <View style={styles.bottom}>
          <BottomNav navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f0f3f5",
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    margin: 10,
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  }
});

module.exports = MatchView;
