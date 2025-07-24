import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AllItems = ({ data }: { data: any[] }) => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell2}>{item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText]}>Item</Text>
        <Text style={[styles.cell, styles.headerText]}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.tableBody}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#1E90FF',
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
    paddingHorizontal: 7,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  cell2: {
    flex: 1,
    fontSize: 16,
    marginLeft:50
  }
});
