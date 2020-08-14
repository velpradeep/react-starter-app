import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/home.scss';

const { Header, Sider, Content } = Layout;
const columns = [
    {
        title: 'Task ID',
        dataIndex: 'task_id',
    },
    {
        title: 'Application ID',
        dataIndex: 'application_id',
    },
    {
        title: 'Request ID',
        dataIndex: 'request_id',
    },
    {
        title: 'Request Type',
        dataIndex: 'request_type',
    },
    {
        title: 'Stage',
        dataIndex: 'stage',
    },
    {
        title: 'Applicant Name',
        dataIndex: 'applicant_name',
    },
    {
        title: 'Submission Date',
        dataIndex: 'submission_date',
    },
    {
        title: 'Action Due Date',
        dataIndex: 'action_due_date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];
const data = [
    {
        key: '1',
        task_id: '34234op',
        application_id: '3243232',
        request_id: '32423',
        request_type: 'New License',
        stage: 'Initial Inspection',
        applicant_name: 'Name Customer',
        submission_date: 'DD,MM,YY',
        action_due_date: 'DD,MM,YY',
        status: 'Reject',
    },
    {
        key: '2',
        task_id: '34234op',
        application_id: '3243232',
        request_id: '32423',
        request_type: 'New License',
        stage: 'Initial Inspection',
        applicant_name: 'Name Customer',
        submission_date: 'DD,MM,YY',
        action_due_date: 'DD,MM,YY',
        status: 'Reject',
    },
    {
        key: '3',
        task_id: '34234op',
        application_id: '3243232',
        request_id: '32423',
        request_type: 'New License',
        stage: 'Initial Inspection',
        applicant_name: 'Name Customer',
        submission_date: 'DD,MM,YY',
        action_due_date: 'DD,MM,YY',
        status: 'Reject',
    },
    {
        key: '4',
        task_id: '34234op',
        application_id: '3243232',
        request_id: '32423',
        request_type: 'New License',
        stage: 'Initial Inspection',
        applicant_name: 'Name Customer',
        submission_date: 'DD,MM,YY',
        action_due_date: 'DD,MM,YY',
        status: 'Reject',
    },
];

class Home extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    className="site-layout-background"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['my_tasks']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="my_tasks" icon={<UserOutlined />}>My Tasks</Menu.Item>
                        <Menu.Item key="reports" icon={<UserOutlined />}>Reports</Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background">
                        <div> Role: Auditor </div>
                        <Menu mode="horizontal">
                            <Menu.Item key="language">Language</Menu.Item>
                            <Menu.Item key="profile">User name</Menu.Item>
                            <Menu.Item key="logout">Logout</Menu.Item>
                        </Menu>
                    </Header>
                    <Header className="site-layout-sub-header-background">
                        My tasks
                    </Header>
                    <Content>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Table columns={columns} dataSource={data} size="small" />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
