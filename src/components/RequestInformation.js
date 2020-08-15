import React, { Component } from 'react';
import { Avatar, Card } from 'antd';
import '../styles/request-information.scss';
import { UserOutlined } from "@ant-design/icons";

class RequestInformation extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="request-information">
                <Card size="small" title="Request Information" style={{ width: 300 }} loading={loading}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Card>
            </div>
        );
    }
}

export default RequestInformation;
