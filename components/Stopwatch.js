/*This is an Example of Timer/Stopwatch in React Native */
import React, { Component } from 'react';
//import React in our project
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
//import all the required components
import { Stopwatch } from 'react-native-stopwatch-timer';
//importing library to use Stopwatch and Timer

// AsyncStorageに保存する用のキー
// const CURRENTTIME = "@App:currentTimeList";

export default class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopwatchStart: false,
            resetStopwatch: false,
            currentTime: null,
        };
        this.startStopStopWatch = this.startStopStopWatch.bind(this); // member function. 
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }                            //menber関数の bind(this) を呼んでComponent自身がthisになるように指定しておく

    startStopStopWatch() {
        this.setState({ isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false });
    }

    getFormattedTime(time) {
        CURRENTTIME = time;
    }

    resetStopwatch() {
        this.setState({ isStopwatchStart: false, resetStopwatch: true });
    }

    // resetStartStopWatch() {
    //   this.setState({
    //     // isStopwatchStart: !this.state.isStopwatchStart,
    //     currentTime: null,
    //   });
    //   console.log(currentTime);
    // }

    // resetStartStopWatch = (time) => {
    //   this.startStopStopWatch();
    // }

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

    render() {
    
        return (
            

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
        );
    }
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

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