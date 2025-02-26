import { router } from "expo-router";
import { Text, View } from "react-native";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Header />
            <View >
                {/* <Link href="/(tabs)" style={styles.title}>Dashboard</Link> */}
                <Button onPress={() => router.navigate("/home")}>
                    <Button.Title>Começar</Button.Title>
                </Button>
            </View>
        </View>
    )
}
