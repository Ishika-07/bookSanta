import * as React from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends React.Component{
    constructor(){
        super()
        this.state = {
          requestedBooksList : []
        }
        this.requestRef = null;
    
      }
    
    componentDidMount(){
        this.getRequestedBooksList()
      }

      componentWillUnmount(){
        this.requestRef
      }

      getRequestedBooksList=async()=>{
          this.requestRef = db.collection('requests')
          .onSnapshot((snapshot)=>{
            var requestedBooksList = snapshot.docs.map((doc) => {doc.data()});
            this.setState({
              requestedBooksList : requestedBooksList
            });

            console.log(this.state.requestedBooksList)
          })
      }
      

      keyExtractor = (item, index) => index.toString()

      renderItem=({item, i})=>{
        console.log(item)
        return(
          <ListItem 
            key={i}
            title={item.book_name}
            subtitle={item.reason_to_request}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button} onPress={()=>{
                  console.log(item.book_name)
                  this.props.navigation.navigate("RecieverDetails",{"details": item})
                }}>
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
              bottomDivider

          />
        )
      }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books" navigation ={this.props.navigation}/>
                <View style={{flex:1}}>
                {
                  this.state.requestedBooksList.length === 0
                  ?(
                    <View style={styles.subContainer}>
                      <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
                    </View>
                  )
                  :(
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.requestedBooksList}
                      renderItem={this.renderItem}
                    />
                  )
                }
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
