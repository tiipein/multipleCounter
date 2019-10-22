import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView,
    StatusBar,  
    Platform,
    TouchableOpacity, 
    TouchableHighlight,
    AsyncStorage}from 'react-native';
import { Input} from 'react-native-elements';
import Button from "./components/Button";
// import TestApp from "./components/Stopwatch";
import Storage from 'react-native-storage';
import { AuthSession } from 'expo';
//import all the required components
import {Stopwatch}  from 'react-native-stopwatch-timer';

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
     isStopwatchStart: false,
     resetStopwatch: false,
     currentTime: null,
    };    
    this.startStopStopWatch = this.startStopStopWatch.bind(this); // member function. 
    this.resetStopwatch = this.resetStopwatch.bind(this); 
 }

  // this.constructor.displayNameで、自身のクラス名を取得
  className = this.constructor.displayName

  componentDidMount = () => {
    this.setInitialState()
  }

  startStopStopWatch() {
    this.setState({ isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false });
}

getFormattedTime(time) {
    CURRENTTIME = time;
}

resetStopwatch() {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
}

resetStartStopWatch() {
  console.log(CURRENTTIME);
}

// AsyncStorage からCURRENTTIME を読み込む
loadCurrentTime = async () => {
  try {  // 非同期通信：成功するかどうかわからない
      let currentTimeString = await AsyncStorage.getItem(CURRENTTIME);
      if (currentTimeString) {
          let currentTimeList = JSON.parse(currentTimeString); // JSON型から戻す
          let currentIndex = currentTimeList.length; // currentTimeリストの長さ
          this.setState({
              currentTimeList: currentTimeList,
              currentIndex: currentIndex,
          });
      }
  } catch (e) {
      console.log(e);
  }
}

   // AsyncStorageへCURRENTTIMEを保存
   saveCurrentTime = async (currentTimeList) => {  // async は、非同期通信って意味。裏で走る。
    try {
        let currentTimeString = JSON.stringify(currentTimeList);  // json型に変換
        await AsyncStorage.setItem(CURRENTTIME, currentTimeString);  //async , await はセット。await : 裏で走らせない。キー：中身（1対1）
    } catch (e) {   // try catch 例外処理。エラーが出たときの処理。 e : エラー文
        console.log(e);
    }
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
            <View  style={styles.content}>
              <View style={styles.display}>
              
                <Stopwatch laps msecs
                    options={options}
                    //options for the styling
                    start={this.state.isStopwatchStart}
                    //To start
                    reset={this.state.resetStopwatch}
                    //To reset
                    getTime={this.getFormattedTime} />


                <TouchableHighlight onPress={this.startStopStopWatch}>
                    <Text style={{ fontSize: 45, marginTop: 10, color: "#00F" }}>
                        {!this.state.isStopwatchStart ? "▶" : "Ⅱ"}
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetStopwatch}>
                    <Text style={{ fontSize: 40, marginTop: 10, color: "#F00" }}>■</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetStartStopWatch}>
                    <Text style={{ fontSize: 45, marginTop: 10, color: "#F00" }}>♦</Text>
                </TouchableHighlight>
            </View >
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

display: {
  flex: 1,
  marginTop: 32,
  alignItems: 'center',
  justifyContent: 'center'
},



});



  
 

const options = {
  container: {
      backgroundColor: '#00e68e',
      padding: 5,
      borderRadius: 5,
      width: 300,
      alignItems: 'center',
  },
  text: {
      fontSize: 35,
      color: '#FFF',
      marginLeft: 7,
  }
}; 
















