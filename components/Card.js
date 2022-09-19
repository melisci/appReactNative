import {View, StyleSheet} from "react-native"

const Card = props => (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    card:{
        shadowColor: "black",
        shadowOffset: {width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.36,
        elevation: 9,
        borderRadius:10,
        backgroundColor: "white"
    }
})

export default Card