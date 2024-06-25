import React, { useRef, useState } from 'react';
import { View, Text, Image,} from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import YouTube from 'react-native-youtube-iframe';

import styles from "./styles"

export default function PagMusic({ route }) {
  const { nameMusic, nameArtict, imgMusic, videoId } = route.params;
  const [playing, setPlaying] = useState(true); 
  const playerRef = useRef(null);

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      
        <YouTube
        ref={playerRef}
        videoId= {videoId}
        height={0} // Set height to 0 to hide the video
        width="100%"
        play={playing}
        onReady={() => playerRef.current.seekTo(0)}
      />  
        
        <Image
        style={styles.tinyLogo}
        source={{
          uri: imgMusic,
        }}
        />
        <Text style={styles.nameMusic}>{nameMusic}</Text>
        <Text style={styles.nameArtict}>{nameArtict}</Text>

        <View style={styles.painel}>

            <AntDesign
            style={styles.painelControle} 
            name= "stepbackward"
            size={25}
            />

            {playing ? (

            <AntDesign
            style={styles.painelControle}  
            name= "pause"
            color= "back"
            size={30}
            onPress={togglePlaying}
            />
            )    
            :
            (
            <AntDesign
            style={styles.painelControle}  
            name= "caretright"
            size={25}
            onPress={togglePlaying}
            />
            )  
            }

            <AntDesign
            style={styles.painelControle}  
            name= "stepforward"
            size={25}
            />
        </View>

    </View>

    
  );
}
