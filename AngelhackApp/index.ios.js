/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
} from 'react-native';
import IndexView from './iosViews/indexView.ios.js';
import HistoryView from './iosViews/historyView.ios.js';

class AngelhackApp extends Component {
  renderScene(route, navigator) {
    switch(route.name) {
      case 'LoginScreen':
        return <IndexView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>

    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'LoginScreen', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('AngelhackApp', () => AngelhackApp);
