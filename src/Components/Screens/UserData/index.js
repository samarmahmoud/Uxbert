import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ImageBackground
} from "react-native";
import { Card } from "../../commons";
import { RequiredImg } from "../../../Assets/index";
import { connect } from "react-redux";
import { GetUserData } from "./../../../Action/UserAction";
import { styles } from "./style";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.GetUserData();
  }
  displayData = () => {
    this.props.GetUserData();
  };
  RenderItems(item) {
    return (
      <Card>
        <Text style={styles.Text}>{"user : " + item.userId}</Text>
        <Text style={styles.Text}>{item.title}</Text>
      </Card>
    );
  }
  seperator() {
    return <View style={styles.seperator}></View>;
  }
  render() {
    return (
      <ImageBackground source={RequiredImg.Background} style={styles.imageBg}>
        {/* <Button
            title={"Show Data"}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            onPress={() => {
              this.displayData();
            }}
          /> */}
        {this.props.loading && (
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <ActivityIndicator></ActivityIndicator>
          </View>
        )}
        {
          <View style={{ flex: 1 }}>
            <FlatList
              ItemSeparatorComponent={this.seperator}
              data={this.props.posts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => this.RenderItems(item)}
            />
          </View>
        }
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.UserReducer.AllPosts,
    loading: state.UserReducer.loading
  };
};
export default connect(
  mapStateToProps,
  { GetUserData }
)(UserData);
