import React, { Component } from 'react';
import { Table, Tabs } from 'antd';
import '../styles/license-history.scss';

const { TabPane } = Tabs;
const columns = [
    {
        title: 'Activity',
        dataIndex: 'activity',
    },
    {
        title: 'Activity Date',
        dataIndex: 'activity_date',
    },
    {
        title: 'License Issue Date',
        dataIndex: 'license_issue_date',
    },
    {
        title: 'Expiry Date',
        dataIndex: 'expiry_date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
    {
        title: 'View Documents',
        dataIndex: 'view_documents',
    },
];
const data = [
    {
        key: '1',
        activity: 'Application Fees',
        activity_date: '100.00 AED',
        license_issue_date: 'Completed',
        expiry_date: 'DD/MM/YY',
        action: 'DD/MM/YY',
        view_documents: '',
    },
    {
        key: '2',
        activity: 'Application Fees',
        activity_date: '100.00 AED',
        license_issue_date: 'Completed',
        expiry_date: 'DD/MM/YY',
        action: 'DD/MM/YY',
        view_documents: '',
    },
    {
        key: '3',
        activity: 'Application Fees',
        activity_date: '100.00 AED',
        license_issue_date: 'Completed',
        expiry_date: 'DD/MM/YY',
        action: 'DD/MM/YY',
        view_documents: '',
    },
    {
        key: '4',
        activity: 'Application Fees',
        activity_date: '100.00 AED',
        license_issue_date: 'Completed',
        expiry_date: 'DD/MM/YY',
        action: 'DD/MM/YY',
        view_documents: '',
    },
];

class LicenseHistory extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="license-history-holder">
                <Tabs defaultActiveKey="license-history">
                    <TabPane tab="License History" key="license-history">
                        <Table columns={columns} dataSource={data} size="small" />
                    </TabPane>
                    <TabPane tab="Document History" key="document-history">
                        <Table columns={columns} dataSource={data} size="small" />
                    </TabPane>

                </Tabs>
            </div>
        );
    }
}

export default LicenseHistory;
