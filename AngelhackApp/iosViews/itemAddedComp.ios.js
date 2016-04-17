import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ItemAdded extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('../assets/List_Open_Bullet.png')}
        />
        <Text style={styles.text}>
          Snack size bag of Lays BBQ potato chips
        </Text>
        <Text style={styles.rightText}>
          12
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f3f5",
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    marginRight: 10
  },
  rightText: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 12
  },
  text: {
    fontSize: 16,
    marginTop: 8
  }
});

module.exports = ItemAdded;
