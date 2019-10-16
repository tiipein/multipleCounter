import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 
export default class Button extends React.Component {
   render(){
       return (
           <TouchableOpacity
               onPress={this.props.function}
               style={[styles.btn, this.props.style]}
           >
               <Text style={styles.btnText}>{this.props.text}</Text>
           </TouchableOpacity>
       )
   }
}
const styles = StyleSheet.create({
   btn: {
       height: 50,
       width: 100,
       alignItems: 'center',
       justifyContent: 'center',
     },
     btnText: {
       fontSize: 30,
       color: "#fff"
     },
})
