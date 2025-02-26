import { colors } from "@/styles/colors"
import { StyleSheet } from  "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray[200],
        maxHeight: 40,
        borderRadius: 10
    },
    searchIcon: {
        padding: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: colors.gray[200],
        color: '#424242',
        maxHeight: 40,
        borderRadius: 10,
    }
})
