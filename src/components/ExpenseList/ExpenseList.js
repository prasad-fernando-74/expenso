import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem';

class ExpenseList extends Component {
    renderItem(expense) {
        return <ExpenseListItem expense={expense} />;
    }

    render() {
       return (
            <FlatList
                data={this.props.expenseData}
                renderItem={this.renderItem}
                keyExtractor={(expense) => expense.id.toString()}
            />
       );
    }
}

const mapStateToProps = state => {
    return { expenseData: state.expenseData };
};

export default connect(mapStateToProps)(ExpenseList);
