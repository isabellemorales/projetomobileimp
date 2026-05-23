import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

//Componene de Texto Padrão
import TextoPadrao from '../componentes/TextoPadrao'; 

export default function Sobre() {

  //Configuraçãoo d Vídeo 
  const player = useVideoPlayer(require('../video/video.mp4'), (player) => {player.loop = true; player.play()});


  return (
    <ScrollView style={styles.container}>
     {/* <Text style={styles.texto}> Hello World! No APP</Text> */}
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>
      <View style={styles.textoSobre}>
        <StatusBar style="light" />
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <TextoPadrao estiloEspecifico={styles.texto}>
          A Imp nasceu em janeiro de 2025, com um sonho ousado e uma paixão ardente pelo universo da moda praia.Em meio à energia contagiante do verão, percebemos um espaço para criar algo único: peças que celebrassem a beleza individual, a liberdade e a confiança de cada mulher. 
          {'\n'}{'\n'}Somos mais que moda praia, somos um estilo de vida. Na Imp, acreditamos que cada peça é uma cAelebração da liberdade, da beleza natural e da confiança. 
          Um convite para expressar sua essência e brilhar em cada momento.
          {'\n'}{'\n'} Por isso, cada coleção é cuidadosamente desenhada para ser atemporal, versátil e para se adaptar à personalidade de quem a usa. Somos um convite para viver com leveza, autenticidade e confiança.
          {'\n'}{'\n'}Nosso objetivo é que cada mulher que escolha Imp se sinta à vontade para brilhar, sem pressa, sem máscaras. Apenas sendo ela mesma, com toda a confiança e liberdade que a moda pode oferecer. Confira a coleção :) 
        </TextoPadrao >
        
       </View>         
    </ScrollView>
  );
}

//instância do componente 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d147eff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  textoSobre:{
    position: "relative",
    paddingHorizontal: 16,
  },
  texto: {
    color: 'white'
  },
  logo: {
    width: 300,
    height: 300, 
    alignSelf: "center"
  },

  video:{
    width: 800,
    height: 900,
    alignSelf: 'center',
    position: "absolute",
  }
});
