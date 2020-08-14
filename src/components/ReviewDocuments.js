import React, { Component } from 'react';
import { Table, Select } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import '../styles/review-documents.scss';

const { Option } = Select;
const columns = [
    {
        title: 'No',
        dataIndex: 'no',
    },
    {
        title: 'Attachment Name',
        dataIndex: 'attachment_name',
    },
    {
        title: 'Attachment Type',
        dataIndex: 'attachment_type',
    },
    {
        title: 'Attachment Size',
        dataIndex: 'attachment_size',
    },
    {
        title: 'Modify date',
        dataIndex: 'modify_date',
    },
    {
        title: 'Attachment View',
        dataIndex: 'attachment_view',
    },
    {
        title: 'Decision',
        dataIndex: 'decision',
    },
];
const data = [
    {
        key: '1',
        no: '1',
        attachment_name: 'Name (Arabic)',
        attachment_type: 'Nationality',
        attachment_size: 'Emirate ID',
        modify_date: 'Passport',
        attachment_view: <EyeOutlined />,
        decision:
            <Select style={{ width: 120 }}>
                <Option value="approve">Approve</Option>
                <Option value="reject">Reject</Option>
            </Select>,
    },
    {
        key: '2',
        no: '2',
        attachment_name: 'Name (Arabic)',
        attachment_type: 'Nationality',
        attachment_size: 'Emirate ID',
        modify_date: 'Passport',
        attachment_view: <EyeOutlined />,
        decision:
            <Select style={{ width: 120 }}>
                <Option value="approve">Approve</Option>
                <Option value="reject">Reject</Option>
            </Select>,
    },
    {
        key: '3',
        no: '3',
        attachment_name: 'Name (Arabic)',
        attachment_type: 'Nationality',
        attachment_size: 'Emirate ID',
        modify_date: 'Passport',
        attachment_view: <EyeOutlined />,
        decision:
            <Select style={{ width: 120 }}>
                <Option value="approve">Approve</Option>
                <Option value="reject">Reject</Option>
            </Select>,
    },
];

class ReviewDocuments extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="review-document-holder">
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        );
    }
}

export default ReviewDocuments;
