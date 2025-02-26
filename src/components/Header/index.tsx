import React from 'react';
import { Image, StatusBar, Text, View } from "react-native"
import { styles } from "./styles"
import { IconUserCircle, IconChevronDown, IconBell, IconSettings } from '@tabler/icons-react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.nameContainer}>
                <IconUserCircle size={36} style={{ marginRight: 2 }}/>
                <Text style={styles.title}>Nome do usúario</Text>
                <IconChevronDown style={{ marginLeft: 2 }} />
            </View>
            <View style={styles.menu}>
                <IconBell />
                <IconSettings />
            </View>
        </View>
    )
}