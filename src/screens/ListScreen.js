import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const friends = [
        { name: 'Name #1', age: 20 },
        { name: 'Name #2', age: 45 },
        { name: 'Name #3', age: 32 },
        { name: 'Name #4', age: 27 },
        { name: 'Name #5', age: 53 },
        { name: 'Name #6', age: 30 },
        { name: 'Name #7', age: 28 },
        { name: 'Name #8', age: 54 },
        { name: 'Name #9', age: 45 }
    ]

    const dash = '-'

    return <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}

        data={friends}
        renderItem={({ item }) => {
            return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 40
    }
});

export default ListScreen;