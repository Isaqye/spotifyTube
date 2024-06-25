import {StyleSheet} from 'react-native';

import App from "./../../App"

export default function HomeScreen() {
  return (
    <>

    <App/>

    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

  }
})
