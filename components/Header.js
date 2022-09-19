import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Colors from "../constants/Colors";

const Header = props => {
    const {title} = props
    return(
        <View style={styles.header}> 
            <Text style={styles.headerTitle}>{title} </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        marginTop: 2,
        width: "100%",
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    headerTitle:{
        color: "black",
        fontSize: 22,
    }
})

export default Header