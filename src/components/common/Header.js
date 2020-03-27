// import libs
import React from 'react';
import {Text, View} from 'react-native';
// make component

const Header = (props) => {
  const {viewStyle, textStyle} = styles;
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 5,
    shadowColor: '#0a0a0a',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
  },
};

// export component for use
export {Header};