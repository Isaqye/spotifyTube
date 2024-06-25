import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "dimgray",
        paddingLeft: 10,
        paddingRight: 10,

    },
    mainContent:{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        
    },
    mainText: {
        flex: 1,

    },
    mainLista:{
        flexDirection: "row-reverse",
        
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    nameMusic:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",

    },
    nameArtict:{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",

    },
    bottom:{
        flex: 0.3,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 7,
        backgroundColor: "slategray",
        
    },
    

})

export default styles