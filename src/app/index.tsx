import { View } from "react-native";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Tracker from "@/components/Tracker";

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Header />
            <Search />
            <View style={{flex: 1, paddingVertical: 40, gap: 40 }}>
                <Tracker title='Planos' />
                <Tracker title='Hábitos' />
                <Tracker title='Datas' />
            </View>
        </View>
    )
}
