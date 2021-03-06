import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';
import SplashPageImg from "../assets/images/splashPageImg.jpg"

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={SplashPageImg
              }
              style={styles.logo}
            />
            <Text>
              Welcome to Rover!
            </Text>
            <TouchableOpacity onPress={() => navigate('Main')}>
            <View style={styles.buttons}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  splashscreen:{
    width: width,
    height: height,
  },
  backgroundphoto:{
    position: 'absolute',
    resizeMode: 'cover',
    height:height,
    width:width,
    zIndex:-1
  },
  logoBox:{
    marginTop:(height*.224),
    alignItems:'center'
  },
  logo: {
    width: (width*.768),
    height:(height*.154),
    resizeMode: 'contain',
  },
  taglinebox:{
    alignItems: 'center',
    alignSelf: 'center',
    width:(width*.742),
    justifyContent: 'center',
    marginTop: (height*.079),
    marginBottom: (height*.18)
  },
  tagline:{
    fontWeight:'800',
    fontSize:34,
    color: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  buttonbox:{
    alignItems: 'center',
    height: height *(34/100),
    width: width,
  },
  buttons:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
    overflow: 'visible',
    width: (width*.58),
    height: (height*.045),
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    marginBottom: (height*.01),
    backgroundColor: '#00000098',
    paddingTop: 3,
    paddingBottom:5,
    paddingLeft:50,
    paddingRight: 50
  },
  buttonText: {
    letterSpacing:3,
    fontWeight: '800',
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
