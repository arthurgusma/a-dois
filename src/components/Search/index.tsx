import { IconSearch } from '@tabler/icons-react-native'
import { Pressable, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export default function Search() {
    const [text, onChangText] = useState('')
    return (
        <View style={styles.container}>
            <IconSearch style={styles.searchIcon} />
            <TextInput 
                style={styles.input} 
                placeholder="Pesquisar hábitos, planos, datas, etc..."
                value={text}
                onChangeText={onChangText}
            />
        </View>
    )
}