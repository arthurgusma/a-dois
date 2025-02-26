import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: 40,
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    menu: {
        flexDirection: "row"
    },
    list: {
        maxHeight: 120,
    }
})