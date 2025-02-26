import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "row",
        height: 60,
        backgroundColor: "red"
    },
    title: {
        color: "white",
        fontWeight: "bold"
    },
    history: {

    },
    displayDay: {
        borderRadius: 100,
        height: 20,
        backgroundColor: colors.gray[200]
    }
})