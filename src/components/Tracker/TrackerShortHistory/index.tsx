import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { IconChevronRight } from "@tabler/icons-react-native";
import { subDays } from 'date-fns'

type TrackerShortHistoryProps = {
    title: string
}

export default function TrackerShortHistory({title}: TrackerShortHistoryProps) {
    const formatDay = (date: Date) => String(date.getDate()).padStart(2, '0');

    const pastWeek = [
        formatDay(subDays(new Date(), 6)),
        formatDay(subDays(new Date(), 5)),
        formatDay(subDays(new Date(), 4)),
        formatDay(subDays(new Date(), 3)),
        formatDay(subDays(new Date(), 2)),
        formatDay(subDays(new Date(), 1)),
        formatDay(new Date())
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.history}>
                <FlatList 
                    style={{ flex: 1, flexDirection: "row", gap: 20 }}
                    data={pastWeek} 
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.displayDay}>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                />
                <IconChevronRight />
            </View>
        </View>
    )
}