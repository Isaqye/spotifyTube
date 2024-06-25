import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';

import styles from "./styles"

const DATA = [
  {
    id: '1',
    nameMusic: 'Blinding Lights',
    nameArtict: "The Weeknd",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b273c464fabb4e51b72d657f779a",
    videoId: "4NRXx6U8ABQ",
  },
  {
    id: '2',
    nameMusic: 'Shape of You',
    nameArtict: "Ed Sheeran",
    imgMusic: "https://i.scdn.co/image/ab67616d00001e0283e9b06ccd219248b5301264",
    videoId: "JGwWNGJdvx8",
  },
  {
    id: '3',
    nameMusic: 'Someone You Loved',
    nameArtict: "Lewis Capaldi",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2",
    videoId: "zABLecsR5UE",
  },
  {
    id: '4',
    nameMusic: 'Sunflower',
    nameArtict: "Post Malone & Swae Lee",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    videoId: "ApXoWvfEYVU",
  },
  {
    id: '5',
    nameMusic: 'Dance Monkey',
    nameArtict: "Tones and I",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b27338802659d156935ada63c9e3",
    videoId: "q0hyYWKXF0Q",
  },
  {
    id: '6',
    nameMusic: 'One Dance',
    nameArtict: "Drake feat. Wizkid & Kyla",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
    videoId: "iAbnEUA0wpA",
  },
  {
    id: '7',
    nameMusic: 'Rockstar',
    nameArtict: "Post Malone feat. 21 Savage",
    imgMusic: "https://pbs.twimg.com/media/Et9LRl0WYAsh1dQ.jpg",
    videoId: "UceaB4D0jpo",
  },
  {
    id: '8',
    nameMusic: 'Stay',
    nameArtict: "The Kid LAROI & Justin Bieber",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
    videoId: "kTJczUoc26U",
  },
  {
    id: '9',
    nameMusic: 'Starboy',
    nameArtict: "The Weeknd feat. Daft Punk",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
    videoId: "34Na4j8AVgA",
  },
  {
    id: '10',
    nameMusic: 'As It Was',
    nameArtict: "Harry Styles",
    imgMusic: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    videoId: "H5v3kku4y6Q",
  },
];


const Item = ({nameMusic, nameArtict, imgMusic,videoId, navigation }) => (
  
    <TouchableOpacity
        style= {styles.bottom}
        onPress={() => navigation.navigate("PagMusic",
          {
            nameArtict,
            nameMusic,
            imgMusic,
            videoId,
          }
        )}
        >
        
        <View style={styles.mainContent}>

        <Image
        style={styles.tinyLogo}
        source={{
          uri: imgMusic,
        }}/>
        
        <View style={styles.mainText}>

        <Text style={styles.nameMusic}>{nameMusic}</Text>

        <Text style={styles.nameArtict}>{nameArtict}</Text>

        </View>

        </View>

        </TouchableOpacity>    
  
);

export default function Lista({navigation}) {
  
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
        <Item 

        nameMusic={item.nameMusic}
        nameArtict={item.nameArtict}
        imgMusic={item.imgMusic}
        videoId={item.videoId}
        navigation={navigation}

        />)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

    
  );
}
