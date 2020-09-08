import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends React.Component{

    constructor(){
        super()
        this.state={
          emailId : '',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          docId:''
        }
      }

      getUserDetails=()=>{
          var user = firebase.auth().currentUser;
          var email = user.email;

          db.collection('users').where('email_id','==', email).get().then((snapshot)=>{
              snapshot.forEach((doc)=>{
                  var data = doc.data()
                  this.setState({
                      emailId: data.email_id,
                      firstName: data.first_name,
                      lastName: data.last_name,
                      address: data.address,
                      contact: data.contact,
                      docId:doc.id

                  })
                
              })
          })
      }
      updateDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "address": this.state.address,
            "contact": this.state.contact
        })

        alert('Profile Updated Successfully')
      }

      componentDidMount(){
          this.getUserDetails()
      }
      
      render(){

        return(
           
                <View>
                    <MyHeader title='Settings' navigation={this.props.navigation} />
                    <ScrollView>
                        <KeyboardAvoidingView>
                            

                            <TextInput
                            placeholder ={"First Name"}
                            maxLength ={15}
                            onChangeText={(text)=>{
                              this.setState({
                                firstName: text
                              })
                            }}
                            />

                            <TextInput
                             placeholder ={"Last Name"}
                             maxLength ={15}
                             onChangeText={(text)=>{
                               this.setState({
                                 lastName: text
                               })
                             }}
                            />

                            <TextInput
                             placeholder ={"Contact"}
                             maxLength ={10}
                             keyboardType='numeric'
                             onChangeText={(text)=>{
                               this.setState({
                                 contact: text
                               })
                             }}/>

                            <TextInput
                             placeholder ={"Address"}
                             multiline={true}
                             onChangeText={(text)=>{
                               this.setState({
                                 address: text
                               })
                             }}/>
                           <View>
                            <TouchableOpacity
                                onPress={()=>{
                                   this.updateDetails()
                                
                                }}>
                                      <Text>Update</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
           
        );
      }
}