import { FlatList, Text, View } from "react-native";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Accordion";
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
        <View >
           <Accordion
              type="multiple"
              collapsible
              defaultValue={["item-1"]}
              className="w-full max-w-sm native:max-w-md"
            >
              <AccordionItem value={title}>
                <AccordionTrigger>
                    <Text className="text-white text-2xl font-semibold">{title}</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <FlatList 
                      data={DATA} 
                      renderItem={({ item }) => (
                            <TrackerShortHistory title={item.title} />
                    )}
                      keyExtractor={item => item.id}
                    /> 
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
        </View>
    )
}