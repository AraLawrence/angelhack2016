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
import InputView from './iosViews/inputView.ios.js';
import CameraView from './iosViews/cameraView.ios.js';
import ResultMatchView from './iosViews/resultMatchView.ios.js';
import ResultNoneView from './iosViews/resultNoneView.ios.js';

class AngelhackApp extends Component {
  renderScene(route, navigator) {
    switch(route.name) {
      case 'LoginScreen':
        return <IndexView navigator={navigator}/>
      case 'HistoryView':
        return <HistoryView navigator={navigator}/>
      case 'InputView':
        return <InputView navigator={navigator}/>
      case 'CameraView':
        return <CameraView navigator={navigator}/>
      case 'ResultMatchView':
        return <ResultMatchView navigator={navigator}/>
      case 'ResultNoneView':
        return <ResultNoneView navigator={navigator}/>

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
