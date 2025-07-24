import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import Create from './Create'

const Homescreen = () => {
    const [data, setdata] = useState([
    { id: 1, name: "Wheat", quantity: 5 },
    { id: 2, name: "Rice", quantity: 10 },
    { id: 3, name: "Sugar", quantity: 15 },
    { id: 4, name: "Salt", quantity: 20 },
    { id: 5, name: "Oil", quantity: 25 },
    { id: 6, name: "Milk", quantity: 30 },
    { id: 7, name: "Butter", quantity: 35 },
    { id: 8, name: "Cheese", quantity: 40 },
    { id: 9, name: "Curd", quantity: 45 },
    { id: 10, name: "Ghee", quantity: 50 },
    { id: 11, name: "Paneer", quantity: 55 },
])
    const [view, setview] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.buttoncontainer}>
                <Pressable style={[view === 0 ? styles.press1 : null]} onPress={() => setview(0)}>
                    <Text style={[styles.btn, view === 0 ? { color: "white" } : null]}>All Items</Text>
                </Pressable>
                <Pressable style={[view === 1 ? styles.press1 : null]} onPress={() => setview(1)}>
                    <Text style={[styles.btn, view === 1 ? { color: "white" } : null]}>Low Stock</Text>
                </Pressable>
            </View>
            <Pressable style={styles.fab} onPress={() => setview(2)}>
                <Text style={styles.fabText}>+</Text>
            </Pressable>
            {view === 0 && <AllItems data={data} />}
            {view === 1 && <AllItems data={data.filter((item) => item.quantity <= 30)} />}
            {view === 2 && <Create data={data} setdata={setdata}/>}
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: "10%"
    },
    press1: {
        backgroundColor: "#1E90FF", borderRadius: 50, borderWidth: 2
    },
    btn: {
        padding: "2%",
        borderRadius: 50,
        color: 'blue',
        borderWidth: 2,
        borderColor: "gray"
    },
    buttoncontainer: {
        flexDirection: "row",
        gap: 18,
        marginTop: 10
    },
    title: {
        fontSize: 28,
        color: "#000",
        fontWeight: "bold",
        fontFamily: "sans-serif"
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#1E90FF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    fabText: {
        fontSize: 30,
        color: 'white',
    },
})