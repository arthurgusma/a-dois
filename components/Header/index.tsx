import React from 'react';
import { Text, View } from "react-native"
import { styles } from "./styles"
import { IconBell, IconSettings } from '@tabler/icons-react-native'
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Avatar alt='profile image'>
                    <AvatarImage
                        source={{
                        uri: "https://avatars.githubusercontent.com/u/66306912?v=4",
                        }}
                    />
                    <AvatarFallback>
                        <Text>UN</Text>
                    </AvatarFallback>
                </Avatar>
                <Text style={styles.title}>John Doe</Text>
            </View>
            <View style={styles.menu}>
                <IconBell />
                <IconSettings />
            </View>
        </View>
    )
}