import { FlatList, Text, View } from "react-native";
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
        <View className="row my-4">
            <View className="flex-row justify-between items-center my-4">
                <Text className="text-white text-xl">{title}</Text>
                <IconChevronRight />
            </View>
            <FlatList 
                style={{ flex: 1, flexDirection: "row", gap: 10 }}
                data={pastWeek} 
                renderItem={({ item }) => {
                    return (
                        <View className="rounded-full bg-white p-2">
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}