import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/owner-details.scss';

class OwnerDetails extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;
        const data = [
            {
                key: 1,
                name: 'First Name - EN',
                value: 'First Name - EN'
            },
            {
                key: 2,
                name: 'Middle Name - EN',
                value: 'Middle Name - EN'
            },
            {
                key: 3,
                name: 'Family Name - EN',
                value: 'Family Name - EN'
            },
            {
                key: 4,
                name: 'First Name - Arabic',
                value: 'First Name - Arabic'
            },
            {
                key: 5,
                name: 'Middle Name - Arabic',
                value: 'Middle Name - Arabic'
            },
            {
                key: 6,
                name: 'Family Name - Arabic',
                value: 'Family Name - Arabic'
            },
            {
                key: 7,
                name: 'Gender',
                value: 'Gender'
            },
            {
                key: 8,
                name: 'Emirate ID',
                value: 'Emirate ID'
            },
            {
                key: 9,
                name: 'Family book number',
                value: 'Family book number'
            },
            {
                key: 10,
                name: 'Passport',
                value: 'Passport'
            },
            {
                key: 11,
                name: 'Emirate',
                value: 'Emirate'
            },
            {
                key: 12,
                name: 'Mobile',
                value: 'Mobile'
            },
            {
                key: 13,
                name: 'Email',
                value: 'Email'
            },
            {
                key: 14,
                name: 'Nationality',
                value: 'Nationality'
            },
            {
                key: 15,
                name: 'Speciality',
                value: 'Speciality'
            },
            {
                key: 16,
                name: 'Qualification',
                value: 'Qualification'
            },
            {
                key: 17,
                name: 'Owner Share',
                value: 'Owner Share'
            },
        ];

        return (
            <div className="owner-details-holder">
                <Card size="small" className="details-holder" loading={loading}>
                    <Avatar shape="square" size={128} icon={<UserOutlined />} />
                </Card>
                <Card size="small" className="details-holder" loading={loading}>
                    <div>
                        {
                            data.map((datum) =>
                                <div key={datum.key} className="details">
                                    <div>{datum.name}</div>
                                    <div>:</div>
                                    <div>{datum.value}</div>
                                </div>
                            )
                        }
                    </div>
                </Card>
                <Card size="small" className="details-holder" loading={loading}>
                    <div>
                        {
                            data.map((datum) =>
                                <div key={datum.key} className="details">
                                    <div>{datum.name}</div>
                                    <div>:</div>
                                    <div>{datum.value}</div>
                                </div>
                            )
                        }
                    </div>
                </Card>
            </div>
        );
    }
}

export default OwnerDetails;
