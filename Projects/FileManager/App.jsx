import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    VirtualizedList,
    TouchableOpacity,
    Modal,
    TextInput,
    Pressable
} from 'react-native';



function AppFileManager() {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
            position:'relative'
        }} >
            <TouchableOpacity style={{
                position: 'absolute', width: 50, height: 50, borderRadius: 25,
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'black', bottom: 10, right: 10,
            }}
                onPress={() => {
                    setmodalVisible(true)
                    console.log('hello')
                }}
            >
                <Text style={{ color: 'white', fontSize: 30 }} >+</Text>

            </TouchableOpacity>

            <Modal transparent visible={modalVisible} onRequestClose={()=>{setmodalVisible(false)}} >
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent:'center'
                }} >
                    <View style={{
                        position: 'absolute',
                        width: '90%',
                        height: 200,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        
                        alignItems: 'center',
                        justifyContent:'center'
                    }} >
                        <TextInput
                            placeholder='Enter Folder Name'
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                paddingHorizontal: 5,
                                fontSize: 20,
                                width: '90%',
                                marginVertical:10
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                paddingHorizontal: 5,
                                fontSize: 20,
                                width: '90%'
                            }}
                            onPress={() => {
                                setmodalVisible(false)
                            }}
                        >
                            <Text style={{color:'white',textAlign:'center', fontSize:20, padding:10}} >Create Folder</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
}


export default AppFileManager;
