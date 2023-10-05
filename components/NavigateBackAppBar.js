
import React from 'react'
import Icon from "@expo/vector-icons/MaterialIcons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { View } from 'react-native';
import Constants from 'expo-constants';

export default function NavigateBackAppBar({ backgroundColor, navigation }) {

    return (
        /* Needed to use paddingTop to make application bar render correctly */
        <View style={{ paddingTop: Constants.statusBarHeight }}>
            <AppBar
                title="Settings"
                subtitle="Click arrow to go back:"
                backgroundColor={backgroundColor}
                trailing={props => (
                    <HStack>
                        <IconButton
                            icon={props => <Icon name='arrow-back' {...props} />}
                            onPress={() => { navigation.goBack() }}
                            {...props}
                        />
                    </HStack>
                )}
            />
        </View>

    )
}