import React, { Component } from 'react';
import { Table } from 'antd';
import '../styles/payment-history.scss';

const columns = [
    {
        title: 'Payment Item',
        dataIndex: 'payment_item',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Payment Status',
        dataIndex: 'payment_status',
    },
    {
        title: 'Payment Date',
        dataIndex: 'payment_date',
    },
];
const data = [
    {
        key: '1',
        payment_item: 'Application Fees',
        amount: '100.00 AED',
        payment_status: 'Completed',
        payment_date: 'DD/MM/YY',
    },
    {
        key: '2',
        payment_item: 'Inspection Fees',
        amount: '1000.00 AED',
        payment_status: 'Pending',
        payment_date: 'DD/MM/YY',
    },
    {
        key: '3',
        payment_item: 'Verify Fees',
        amount: '500.00 AED',
        payment_status: 'Pending',
        payment_date: 'DD/MM/YY',
    },
    {
        key: '4',
        payment_item: 'Service Charges',
        amount: '10.00 AED',
        payment_status: 'Completed',
        payment_date: 'DD/MM/YY',
    },
];

class PaymentHistory extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="payment-history-holder">
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        );
    }
}

export default PaymentHistory;
