import { Pressable, StyleSheet, FlatList, Text, TextInput, View, Alert } from 'react-native'
import { useState } from 'react'

const Create = ({ data, setdata }: { data: any[], setdata: any }) => {
  const [itemname, setItemname] = useState("")
  const [isEdit, setisEdit] = useState(false)
  const [editItem, seteditItem] = useState<any>(null)
  const [quantity, setQuantity] = useState("")

  const handleEdit = (item: any) => {
    setItemname(item.name)
    setisEdit(true)
    seteditItem(item)
    setQuantity(item.quantity.toString())
  }

  const updateItem = () => {
    setdata(data.map((item) =>
      item.id === editItem.id
        ? { ...item, name: itemname, quantity: parseInt(quantity) }
        : item
    ))
    setItemname("")
    setisEdit(false)
    setQuantity("")
  }

  const handleDelete = (itemId: number) => {
    setdata(data.filter((item) => item.id !== itemId));
  };

  const handleadd = () => {
    if (!itemname || !quantity)
      return Alert.alert("Add Quantity or Item Name");

    const newItem = {
      id: Date.now(),
      name: itemname,
      quantity: parseInt(quantity),
    };

    setdata([...data, newItem]);
    setItemname("");
    setisEdit(false)
    setQuantity("");
  }

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell2}>{item.quantity}</Text>
      <Pressable style={styles.actionBtn} onPress={() => handleEdit(item)}>
        <Text style={styles.actionText}>Edit</Text>
      </Pressable>
      <Pressable style={styles.actionBtn} onPress={() => handleDelete(item.id)}>
        <Text style={[styles.actionText, { color: 'red' }]}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          <Text>Name</Text>
          <TextInput
            placeholder='Enter the Item'
            style={styles.name1}
            value={itemname}
            onChangeText={setItemname}
          />
          <Text>Quantity</Text>
          <TextInput
            placeholder='Enter the Quantity'
            style={styles.name}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType='numeric'
          />
          <Pressable style={styles.btn} onPress={isEdit ? updateItem : handleadd}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              {isEdit ? 'Edit Item' : 'Add Item'}
            </Text>
          </Pressable>

          <View style={styles.wrapper}>
            <View style={[styles.row, styles.header]}>
              <Text style={[styles.cell, styles.headerText]}>Item</Text>
              <Text style={[styles.cell, styles.headerText]}>Quantity</Text>
              <Text style={[styles.cell, styles.headerText]}>Actions</Text>
            </View>
          </View>
        </>
      }
    />
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    padding: '4%',
  },
  name1: {
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    padding: '2%',
    borderRadius: 10
  },
  name: {
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    padding: '2%',
    borderRadius: 10
  },
  btn: {
    backgroundColor: '#0aca37ff',
    padding: '4%',
    borderRadius: 20,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#1E90FF',
    width: 310
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
  },
  tableBody: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 9,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  cell2: {
    flex: 1,
    fontSize: 16,
    marginLeft: 50
  },
  actionBtn: {
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    fontSize: 14,
    color: '#007AFF',
  }
})