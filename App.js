import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import Button from "./components/Button";
 
export default class App extends React.Component{
 
 constructor(props){
   super(props)
 
   this.state = {
     counter: 1,
   }
 }
 
 componentDidMount(){
   this.setState({
     counter: 0
   })
 }
 
 plus = () => {
   this.setState({
     counter: this.state.counter + 1
   })
 }
 
 minus = () => {
   if( this.state.counter > 0 ){
     this.setState({
       counter: this.state.counter - 1
     })
   }
 }
 
 render(){
 
   return (
     <View style={styles.container}>
       <Text style={styles.counter}>{this.state.counter}</Text>
       <View style={styles.btnWrap}>
         <Button
           text="+"
           function={this.plus}
           style={{backgroundColor: "blue"}}
         />
         <Button
           text="-"
           function={this.minus}
           style={{backgroundColor: "red"}}
         />
       </View>
    
     </View>
   )
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 counter: {
   fontSize: 48,
 },
 btnWrap: {
   flexDirection: "row",
 },
 plusBtn: {
   backgroundColor: "blue",
 },
 minusBtn: {
   backgroundColor: "red",
 }
});

