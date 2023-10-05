
import React from 'react'
import Icon from "@expo/vector-icons/MaterialIcons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { View } from 'react-native';
import Constants from 'expo-constants';

export default function MapApplicationBar({ backgroundColor, title, locationIcon, keijo, navigation }) {

    return (
        /* Needed to use paddingTop to make application bar render correctly */
        <View style={{paddingTop: Constants.statusBarHeight}}> 
            <AppBar
                title={title} //props drilling done here
                subtitle="press icon on the right for your location:"
                backgroundColor={backgroundColor}
                trailing={props => (
                    <HStack>
                         <IconButton
                            icon={props => <Icon name={locationIcon} {...props} />}
                            onPress = {keijo}
                            {...props}
                        />
                        <IconButton
                            icon={props => <Icon name='settings' {...props} />}
                            onPress={() => {navigation.navigate('settings')}}
                            {...props}
                        />
                       
                    </HStack>
                )}
            />
        </View>

    )
}