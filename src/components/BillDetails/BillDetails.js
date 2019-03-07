import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Table, Row, Cell } from 'react-native-table-component';
import FIcon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../theme';
 
class BillDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Item', 'Price', 'Qty', 'Amount'],
      widthArr: [200, 100, 50, 100]
    };
  }
 
  onPressView() {
    Actions.bill();
  }

  render() {
    const element = () => (
        <TouchableOpacity onPress={() => this.onPressView()}>
          <View style={styles.btn}>
            <FIcon name="eye" size={25} color={colors.blue} />
          </View>
        </TouchableOpacity>
      );

    const state = this.state;
    const tableData = [];
    const rowData1 = [];
    const rowData2 = [];
    const rowData3 = [];
    const rowData4 = [];
    const rowData5 = [];
    const rowData6 = [];
    const rowData7 = [];
    const rowData8 = [];
    const rowData9 = [];
    const rowData10 = [];

    rowData1.push('AMBEWELA UHT MILK 1L');
    rowData1.push('220.00');
    rowData1.push('1');
    rowData1.push('220.00');
    tableData.push(rowData1);

    rowData2.push('DOUBLE DECKER CORNTOS BBQ PKT 70G');
    rowData2.push('240.00');
    rowData2.push('1');
    rowData2.push('240.00');
    tableData.push(rowData2);

    rowData3.push('DIANA TIKKA CHEESE 8G');
    rowData3.push('10.00');
    rowData3.push('1');
    rowData3.push('10.00');
    tableData.push(rowData3);

    rowData4.push('DIANA TIKKA CHILI 8G');
    rowData4.push('10.00');
    rowData4.push('1');
    rowData4.push('10.00');
    tableData.push(rowData4);

    rowData5.push('ARLA MOZARELLA CHEESE SLICES 150G');
    rowData5.push('798.00');
    rowData5.push('1');
    rowData5.push('798.00');
    tableData.push(rowData5);

    rowData6.push('CREST CHICKEN SAUSAGES S/LESS 250G');
    rowData6.push('320.00');
    rowData6.push('1');
    rowData6.push('3209.00');
    tableData.push(rowData6);

    tableData.push(rowData7);

    rowData8.push('Gross Amount');
    rowData8.push('');
    rowData8.push('');
    rowData8.push('1,598.00');
    tableData.push(rowData8);

    rowData9.push('Net Amount');
    rowData9.push('');
    rowData9.push('');
    rowData9.push('1,598.00');
    tableData.push(rowData9);

    rowData10.push('Credit');
    rowData10.push('');
    rowData10.push(element);
    rowData10.push('1,598.00');
    tableData.push(rowData10);

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
                <Cell key={1} data={element()} textStyle={styles.text} />
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
 
export default BillDetails;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
