import * as React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';
import normalize from 'react-native-normalize';

// const dim = Dimensions.get('window')
// console.log(dim)

const LoginScreen = () => {
  return (
    <View style={styles.loginScreen}>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
      </View>
      <View style={styles.blueboxParent}>
        <Text style={[styles.bluebox, styles.blueboxTypo]}>bluebox</Text>
        <Image
          style={styles.group22}
          resizeMode="cover"
          source={require('../assets/bluebox_icon.png')}
        />
      </View>
      <View style={[styles.loginContainer, styles.rectangleLayout]}>
        <View style={styles.groupItem} />
        <View style={[styles.groupLayout, styles.groupPosition]}>
          <Text style={[styles.login, styles.senhaTypo]}>Login</Text>
        </View>
      </View>
      <View style={[styles.senhaContainer, styles.rectangleLayout]}>
        <View style={styles.groupItem} />
        <View style={[styles.groupLayout, styles.groupPosition]}>
          <Text style={[styles.senha, styles.senhaTypo]}>Senha</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={styles.groupChild2} />
        <View style={[styles.entreComGoogleParent, styles.googleLayout]}>
          <Text
            style={[styles.entreComO, styles.blueboxTypo, styles.senhaTypo]}
          >
            Entrar com Google
          </Text>
          <Image
            style={[styles.googleLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/google-icon.png')}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.entreComAppleParent, styles.appleLayout]}>
          <Text style={[styles.entreComA, styles.entrarTypo]}>
            Entrar com Apple
          </Text>
          <Image
            style={[styles.appleLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/apple-logo.png')}
          />
        </View>
      </View>
      <View style={styles.ouParent}>
        <Text style={[styles.ou, styles.ouTypo]}>ou</Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.groupChild4, styles.lineViewLayout]} />
      </View>
      <Text style={[styles.esqueciMinhaSenha, styles.ouTypo]}>
        Esqueci minha senha!
      </Text>
      <Text style={styles.aindaNoPossuiConta}>
        Ainda não possui uma conta?
        <Text>{` `}</Text>
        <Text style={styles.crieUmaAgora}>Crie uma agora</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentLayout: {
    alignSelf: 'center',
    height: 50,
    width: 380,
    position: 'absolute',
  },
  groupChildLayout: {
    borderRadius: Border.br_base,
    alignSelf: 'center',
    top: 0,
    height: 50,
    width: normalize(350),
    position: 'absolute',
  },
  entrarTypo: {
    color: Color.white,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: '500',
    fontSize: FontSize.size_base,
    position: 'absolute',
  },
  blueboxTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  rectangleLayout: {
    height: normalize(59),
    width: normalize(350),
    alignSelf: 'center',
    position: 'absolute',
  },
  groupLayout: {
    height: 5,
    width: 45,
    top: -25,
    position: 'absolute',
  },
  groupPosition: {
    left: 20,
    width: 61,
  },
  senhaTypo: {
    fontSize: FontSize.size_base,
    color: Color.gray,
  },
  googleLayout: {
    height: 24,
    position: 'absolute',
  },
  appleLayout: {
    height: 24,
    position: 'absolute',
  },
  iconPosition: {
    width: 24,
  },
  ouTypo: {
    fontSize: FontSize.size_base,
    position: 'absolute',
  },
  lineViewLayout: {
    height: 1,
    width: 108,
    borderTopWidth: 1,
    top: 10,
    borderColor: '#c9c9c9',
    borderStyle: 'solid',
    position: 'absolute',
  },
  groupChild: {
    backgroundColor: Color.mediumblue,
  },
  entrar: {
    alignSelf: 'center',
    top: 15,
  },
  rectangleParent: {
    top: 415,
  },
  bluebox: {
    left: 60,
    fontSize: 48,
    color: Color.mediumblue,
    textAlign: 'left',
    top: 0,
  },
  group22: {
    top: 1,
    width: 53,
    height: 53,
    left: 0,
    position: 'absolute',
  },
  blueboxParent: {
    top: 100,
    alignSelf: 'center',
    width: 225,
    height: 55,
    position: 'absolute',
  },
  groupItem: {
    top: -50,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderStyle: 'solid',
    borderRadius: Border.br_base,
    alignSelf: 'center',
    height: 50,
    width: normalize(350),
    position: 'absolute',
  },
  senha: {
    color: Color.gray,
    fontFamily: FontFamily.ubuntuRegular,
    backgroundColor: Color.white,
    top: -35,
    position: 'absolute',
  },
  senhaContainer: {
    top: 365,
  },
  login: {
    color: Color.gray,
    fontFamily: FontFamily.ubuntuRegular,
    backgroundColor: Color.white,
    top: -35,
    position: 'absolute',
  },
  loginContainer: {
    top: 285,
  },
  groupChild2: {
    borderColor: '#212121',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: Border.br_base,
    alignSelf: 'center',
    top: 0,
    height: 50,
    width: normalize(350),
    position: 'absolute',
  },
  entreComO: {
    top: normalize(3),
    color: Color.gray,
    left: normalize(30),
  },
  entreComGoogleParent: {
    width: normalize(150),
    top: normalize(14),
  },
  rectangleParent1: {
    top: 635,
    alignItems: 'center',
  },
  groupChild3: {
    backgroundColor: Color.black,
  },
  entreComA: {
    top: normalize(3),
    left: normalize(30),
  },
  entreComAppleParent: {
    width: normalize(150),
    top: normalize(14),
  },
  rectangleParent2: {
    top: 565,
    alignItems: 'center',
  },
  ou: {
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemibold,
    color: '#c9c9c9',
    top: 0,
  },
  lineView: {
    left: 140,
  },
  groupChild4: {
    left: 0,
  },
  ouParent: {
    top: 525,
    width: 250,
    height: 20,
    alignSelf: 'center',
    position: 'absolute',
  },
  esqueciMinhaSenha: {
    top: 375,
    left: normalize(228, 'height'),
    color: Color.black,
    textDecorationLine: 'underline',
    fontFamily: FontFamily.ubuntuRegular,
  },
  aindaNoPossuiConta: {
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.gray,
    top: 485,
    fontSize: FontSize.size_base,
    alignSelf: 'center',
    position: 'absolute',
  },
  crieUmaAgora: {
    fontWeight: '700',
    fontFamily: FontFamily.ubuntuBold,
    textDecorationLine: 'underline',
    color: Color.mediumblue,
  },
  loginScreen: {
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
});

export default LoginScreen;
