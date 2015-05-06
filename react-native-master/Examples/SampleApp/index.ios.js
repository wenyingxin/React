/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//模拟电影数据
var MOCKED_MOVIES_DATA =[
{
  title:'Title',
  year:'2015',
  posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}
},{},{}
];
//电影数据url json
var REQUEST_URL ='https://raw.githubusercontent.com/facebook/react-
    native/master/docs/MoviesExample.json';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var SampleApp = React.createClass({

  getInitialState:function(){
    return{
      //movies:null,
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2,
      }),
      loaded:false,
    }
  },

  componentDidMount:function(){
    this.fechData();
  },
  fechData:function(){
    fech(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
            loaded:true,
          });
        })
        .done();
  },



  render: function() {
    //var movie = MOCKED_MOVIES_DATA[0];
    if(!this.state.movies){
      return this.renderLoadingView();
    }
    //var movie = this.state.movies[0];
    //return this.renderMovie(movie);
    //return 电影列表
    <ListView
      dataSource={this.state.dataSource}
      renderRow ={this.renderMovie}
      style={styles.ListView}
    />
  },
  renderLoadingView:function(){
    return(
      <View style={[styles.container,styles.background]}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },
  renderMovie:function(movie){
    return(

      <View style={styles.container}>

        <Image

          source={{uri:movie.posters.thumbnail}}
          style={style.thumbnail}

        />
      <View style="styles.rightContainer">
        <Text style={styles.title} >{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>

      </View>



    );
  },

    /**
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{uri:movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );**/
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail:{
    width:53,
    height:81,
  },
  rightContainer:{
    flex:1,
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center',
  },
  year:{
    textAlign:"center",
  },
  listView:{
    paddingTop:20,
    backgroundColor:"#F5FCFF",
  },
  active:{
    borderWidth:2,
    borderColor:'#ff0'
  },



});

AppRegistry.registerComponent('SampleApp', () => SampleApp);
