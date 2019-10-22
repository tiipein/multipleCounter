import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView,
    StatusBar,  
    Platform,
    TouchableOpacity, 
    AsyncStorage}from 'react-native';
import { Input} from 'react-native-elements';
import Button from "./components/Button";
import Storage from 'react-native-storage';
import { AuthSession } from 'expo';

const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// storageを作成
const storage = new Storage({
  storageBackend: AsyncStorage
})

export default class App extends React.Component{

 constructor(props){
   super(props)
  
   this.state = {
     counter1: 1,
     counter2: 1,
     counter3: 1,
     counter4: 1,
     inputText1:"",
     inputText2:"",
     inputText3:"",
     inputText4:"",
    };     
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

 plus1 = () => {
  this.setState({
    counter1: this.state.counter1 + 1
  })
}

minus1 = () => {
  if( this.state.counter1 > 0 ){
    this.setState({
     counter1: this.state.counter1 - 1
    })
  }}
  
reset1 = () =>  {
   this.setState({
     counter1: this.state.counter1 = 0
   })
 };

 plus2 = () => {
  this.setState({
    counter2: this.state.counter2 + 1
  })
}

minus2 = () => {
  if( this.state.counter2 > 0 ){
    this.setState({
     counter2: this.state.counter2 - 1
    })
  }}
  
reset2 = () =>  {
   this.setState({
     counter2: this.state.counter2 = 0
   })
 };

 plus3 = () => {
  this.setState({
    counter3: this.state.counter3 + 1
  })
}

minus3 = () => {
  if( this.state.counter3 > 0 ){
    this.setState({
     counter3: this.state.counter3 - 1
    })
  }}
  
reset3 = () =>  {
   this.setState({
     counter3: this.state.counter3 = 0
   })
 };

 plus4 = () => {
  this.setState({
    counter4: this.state.counter4 + 1
  })
}

minus4 = () => {
  if( this.state.counter4 > 0 ){
    this.setState({
     counter4: this.state.counter4 - 1
    })
  }}
  
reset4 = () =>  {
   this.setState({
     counter4: this.state.counter4 = 0
   })
 };

 render(){
    const platform = Platform.OS === 'ios' ? 'ios':'android';

return (
  <KeyboardAvoidingView style={styles.container} behavior="padding"> 
    <View  style={styles.content}>

  
    <View style={styles.input}>
      <Input 
        style={styles.inputText}
        onChangeText={(text) => this.setState({inputText1: text})}
        value={this.state.inputText1}
      />
    </View>
          <Text style={styles.counter}>{this.state.counter1}</Text>
          <View style={styles.btnWrap}>
            <Button
              text="+"
              function={this.plus1}
              style={{backgroundColor: "blue"}}
            />
            <Button
              text="-"
              function={this.minus1}
              style={{backgroundColor: "red"}}
            />
            <Button 
                text='reset' 
                function = {this.reset1}
                style={{backgroundColor:"#00a968"}}>
              </Button>
      </View>  
      </View>

      <View style={styles.content}>
      <View style={styles.input}>
      <Input 
        style={styles.inputText}
        onChangeText={(text) => this.setState({inputText2: text})}
        value={this.state.inputText2}
      />
        </View>
          <Text style={styles.counter}>{this.state.counter2}</Text>
          <View style={styles.btnWrap}>
            <Button 
              text="+"
              function={this.plus2}
              style={{backgroundColor: "blue"}}
            />
            <Button
              text="-"
              function={this.minus2}
              style={{backgroundColor: "red"}}
            />
            <Button 
                text='reset' 
                function = {this.reset2}
                style={{backgroundColor:"#00a968"}}>
            </Button>
      </View> 
      </View>

      <View style={styles.content}> 
      <View style={styles.input}>
      <Input 
        style={styles.inputText}
        onChangeText={(text) => this.setState({inputText3: text})}
        value={this.state.inputText3}
      />
        </View>
          <Text style={styles.counter}>{this.state.counter3}</Text>
          <View style={styles.btnWrap}>
            <Button 
              text="+"
              function={this.plus3}
              style={{backgroundColor: "blue"}}
            />
            <Button
              text="-"
              function={this.minus3}
              style={{backgroundColor: "red"}}
            />
            <Button 
                text='reset' 
                function = {this.reset3}
                style={{backgroundColor:"#00a968"}}>
            </Button>
      </View>
      </View> 

      <View style={styles.content}>
      <View style={styles.input}>
      <Input 
        style={styles.inputText}
        onChangeText={(text) => this.setState({inputText4: text})}
        value={this.state.inputText4}
      />
        </View>
          <Text style={styles.counter}>{this.state.counter4}</Text>
          <View style={styles.btnWrap}>
            <Button 
              text="+"
              function={this.plus4}
              style={{backgroundColor: "blue"}}
            />
            <Button
              text="-"
              function={this.minus4}
              style={{backgroundColor: "red"}}
            />
            <Button 
                text='reset' 
                function = {this.reset4}
                style={{backgroundColor:"#00a968"}}>
            </Button>
      </View> 
      </View>
    </KeyboardAvoidingView>);}
    }

const styles = StyleSheet.create({
 container: {
   flexDirection: 'row',
   flex: 0.3,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
   display: 'flex',
   flexWrap: 'wrap',
   paddingTop: StatusBarHeight,
 },
 counter: {
   fontSize: 60,
   paddingLeft: 75,
   paddingBottom:30,
 },

 btnWrap: {
   flexDirection: "row",
  paddingLeft: 10, 
 },

 plusBtn: {
   backgroundColor: "blue",
 },
 minusBtn: {
   backgroundColor: "red",
 },
 resetBtn: {
   backgroundColor: "#00a968",
 },

input:{
  height:10,
  margin:10,
  width:160,  
  alignItems:"center", 
  flex:1, 
  
},
content:{
  width:200,
},

inputText:{
  padding:10,
  
},

})
;













