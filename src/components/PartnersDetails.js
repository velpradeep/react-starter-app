import React, { Component } from 'react';
import { Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import '../styles/partners-details.scss';

const columns = [
    {
        title: 'Full Name (English)',
        dataIndex: 'full_name_english',
    },
    {
        title: 'Full Name (Arabic)',
        dataIndex: 'full_name_arabic',
    },
    {
        title: 'Nationality',
        dataIndex: 'nationality',
    },
    {
        title: 'Emirate ID',
        dataIndex: 'emirate_id',
    },
    {
        title: 'Passport',
        dataIndex: 'passport',
    },
    {
        title: 'Share %',
        dataIndex: 'share_percentage',
    },
    {
        title: 'Details',
        dataIndex: 'details',
    },
];
const data = [
    {
        key: '1',
        full_name_english: 'Name (English)',
        full_name_arabic: 'Name (Arabic)',
        nationality: 'Nationality',
        emirate_id: 'Emirate ID',
        passport: 'Passport',
        share_percentage: '20%',
        details: <EditOutlined />,
    },
    {
        key: '2',
        full_name_english: 'Name (English)',
        full_name_arabic: 'Name (Arabic)',
        nationality: 'Nationality',
        emirate_id: 'Emirate ID',
        passport: 'Passport',
        share_percentage: '20%',
        details: <EditOutlined />,
    },
    {
        key: '3',
        full_name_english: 'Name (English)',
        full_name_arabic: 'Name (Arabic)',
        nationality: 'Nationality',
        emirate_id: 'Emirate ID',
        passport: 'Passport',
        share_percentage: '20%',
        details: <EditOutlined />,
    },
];

class PartnersDetails extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="partners-details-holder">
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        );
    }
}

export default PartnersDetails;
