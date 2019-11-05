import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Platform, Animated } from 'react-native';
import ToastObject from './customtoastnew;

class App extends Component {

  componentDidMount() {
    console.log("Mounted"); 
    ToastObject.ShowToastFunction('Default Toast Bottom Message tyyds');
    console.log("Mounted 2"); 
  }

  Default_Toast_Bottom = () => {
    this.refs.defaultToastBottom.ShowToastFunction('Default Toast Bottom Message.');
  }

  Default_Toast_Top = () => {
    this.refs.defaultToastTop.ShowToastFunction('Default Toast Top Message.');
  }

  Default_Toast_Bottom_With_Different_Color = () => {
    this.refs.defaultToastBottomWithDifferentColor.ShowToastFunction('Default Toast Bottom Message With Different Color.');
  }

  Default_Toast_Top_With_Different_Color = () => {
    this.refs.defaultToastTopWithDifferentColor.ShowToastFunction('Default Toast Top Message With Different Color.');
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 12 }}>
          <Button onPress={this.Default_Toast_Bottom} title="Click Here To Show Default Toast Bottom Message" />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Button onPress={this.Default_Toast_Top} title="Click Here To Show Default Toast Top Message" />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Button onPress={this.Default_Toast_Bottom_With_Different_Color} title="Click Here To Show Default Toast Bottom Message With Different Color" />
        </View>
        <View style={{ marginBottom: 12 }}>
          <Button onPress={this.Default_Toast_Top_With_Different_Color} title="Click Here To Show Default Toast Top Message With Different Color" />
        </View>
        {/* <CustomToast ref="defaultToastBottom" position="bottom" />
        <CustomToast ref="defaultToastTop" position="top" />
        <CustomToast ref="defaultToastBottomWithDifferentColor" backgroundColor='#4CAF50' position="bottom" />
        <CustomToast ref="defaultToastTopWithDifferentColor" backgroundColor='#E91E63' position="top" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
    margin: 10
  }
});


export default App;
