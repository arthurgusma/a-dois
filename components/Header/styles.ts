import { colors } from "@/styles/colors"
import { StyleSheet } from  "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 80
    },
    nameContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: colors.blue.base,
        fontSize: 16,
        fontWeight:  '600',
        marginLeft: 10
    },
    menu: {
        flexDirection: "row"
    }
})