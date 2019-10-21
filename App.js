import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView,  
    Platform,
    TouchableOpacity, 
    AsyncStorage}from 'react-native';

import { Input} from 'react-native-elements';
import Button from "./components/Button";
import Storage from 'react-native-storage';
import { createStore } from 'redux'



// storageを作成
const storage = new Storage({
  storageBackend: AsyncStorage
})

 
export default class App extends React.Component{

 constructor(props){
   super(props)
 
   this.state = {
     counter: 1,
     inputText:"",
     
   }
 }

  // this.constructor.displayNameで、自身のクラス名を取得
  className = this.constructor.displayName

  componentDidMount = () => {
    this.setInitialState()
  }

  setInitialState = async () => {
    // react-native-storageは、読み込みがとても速い
    storage
      .load({ key: this.className })
      .then(res => this.setState(res))
      .catch(err => console.warn(err))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state !== prevState) {
      // stateに変化があったら、this.stateを丸ごと保存する。
      // react-native-storageは速いので、丸ごと保存しても大丈夫
      storage.save({
        key: this.className,
        data: this.state
      })
    }
  }


//  componentDidMount(){
//    this.setState({
//      counter: 0
//    })
//  }
 
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
   }}
   
 reset = () =>  {
    this.setState({
      counter: this.state.counter = 0
    })
  };

 render(){
    // let taskList = this.state.taskList;
    const platform = Platform.OS === 'ios' ? 'ios':'android';

return (
  <KeyboardAvoidingView style={styles.container} behavior="padding"> 
  
    <View style={styles.input}>
      <Input 
        style={styles.inputText}
        onChangeText={(text) => this.setState({inputText: text})}
        value={this.state.inputText}
   
      />

        </View>
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
            <Button 
                text='reset' 
                function = {this.reset}
                style={{backgroundColor:"green"}}>
              </Button>
{/* 
              const AddButton = ({dispatch}) => (
            <button
              onClick={() => {
              dispatch(add_counter());
              }}>
                Add a counter</button>
                ); */}
       </View>  
    </KeyboardAvoidingView>);}
    }

// let nextId = 0;
// const counters = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_COUNTER":
//       return [...state, {id: nextId++, count: 0}];
//     case "INCREMENT":
//       return state.map(counter => change_counter(counter, action));
//     case "DECREMENT":
//       return state.map(counter => change_counter(counter, action));
//     default:
//       return state;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counters: state
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrement: (id) => dispatch(increment(id)),
//     onDecrement: (id) => dispatch(decrement(id))
//   };
// };



const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 counter: {
   fontSize: 80,
 },
 btnWrap: {
   flexDirection: "row",
 },
 plusBtn: {
   backgroundColor: "blue",
 },
 minusBtn: {
   backgroundColor: "red",
 },
 resetBtn: {
   backgroundColor: "green",
 },
 input:{
  height:40,
  margin:10,
  paddingRight: 0,
  flexDirection:"row",
  alignItems:"center",
},
inputText:{
  flex:1,
  padding:10,
},

});













