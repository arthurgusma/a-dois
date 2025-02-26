import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { IconPlus } from "@tabler/icons-react-native";
import TrackerShortHistory from "./TrackerShortHistory";

type TrackerProps = {
    title: string
}

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  

export default function Tracker({ title }: TrackerProps) {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.menu}>
                <IconPlus />
            </View>
        </View>
        <FlatList 
            style={styles.list}
            data={DATA} 
            renderItem={({ item }) => (
                <TrackerShortHistory title={item.title} />
            )}
            keyExtractor={item => item.id}
        />
        </View>
    )
}