import React, { Component } from 'react';
import { Tabs, List, Input, Form, Comment } from 'antd';
import '../styles/comments-and-transaction-history.scss';
import moment from 'moment';
import { InfoCircleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        itemLayout="horizontal"
        bordered
        renderItem={props => <List.Item><Comment {...props} /></List.Item>}
    />
);
const TransactionList = ({ comments }) => (
    <List
        dataSource={comments}
        itemLayout="horizontal"
        bordered
        renderItem={props => <List.Item><Comment {...props} /></List.Item>}
    />
);
const Editor = ({ onChange, value }) => (
    <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
);
const comments = [
    {
        key: '1',
        author: 'Officer name',
        role: 'Role',
        process_step: 'process step',
        content: 'Comment...',
        datetime: moment().fromNow(),
    },
    {
        key: '2',
        author: 'Officer name',
        role: 'Role',
        process_step: 'process step',
        content: 'Comment...',
        datetime: moment().fromNow(),
    },
    {
        key: '3',
        author: 'Officer name',
        role: 'Role',
        process_step: 'process step',
        content: 'Comment...',
        datetime: moment().fromNow(),
    },
];

class CommentsAndTransactionHistory extends Component {
    state = {
        loading: false,
        comments: comments,
        value: '',
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { loading, comments, value } = this.state;

        return (
            <div className="comments-and-transaction-history-holder">
                <Tabs defaultActiveKey="comments">
                    <TabPane tab="Comments" key="comments">
                        <p>Comments History</p>
                        {comments.length > 0 && <CommentList comments={comments} />}
                        <p>Comments</p>
                        <Editor
                            onChange={this.handleChange}
                            value={value}
                        />
                        <p><InfoCircleOutlined /> The comment will be saved with approve or reject</p>
                    </TabPane>
                    <TabPane tab="Transaction History" key="transaction-history">
                        <p>Transactions History</p>
                        {comments.length > 0 && <TransactionList comments={comments} />}
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default CommentsAndTransactionHistory;
