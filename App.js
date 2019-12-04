//This is an example code to React Native Show Progress bar While Loading WebView//
import React, { Component } from 'react';
//import react in our code.
 
import { StyleSheet, ActivityIndicator, View } from 'react-native';
//import all the components we are going to use.
 
import { WebView } from "react-native-webview";
 
export default class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
 
  showSpinner() {
    console.log('Show Spinner');
    this.setState({ visible: true });
  }
 
  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ visible: false });
  }
 
  render() {
    return (
      <View
        style={this.state.visible === true ? styles.stylOld : styles.styleNew}>
        {this.state.visible ? (
          <ActivityIndicator
            color="#0000ff"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}
 
        <WebView
          style={styles.WebViewStyle}
          //Loading URL
          source={{ uri: 'http://10.1.1.150' }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          //View to show while loading the webpage
          //Want to show the view or not
          //startInLoadingState={true}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});