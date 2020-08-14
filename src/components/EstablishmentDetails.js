import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/establishment-details.scss';

class EstablishmentDetails extends Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;
        const data = [
            {
                key: 1,
                name: 'Establishment Name (English)',
                value: 'Establishment Name (English)'
            },
            {
                key: 2,
                name: 'Establishment Name (Arabic)',
                value: 'Establishment Name (Arabic)'
            },
            {
                key: 3,
                name: 'Category',
                value: 'Category'
            },
            {
                key: 4,
                name: 'Sub category',
                value: 'Sub category'
            },
            {
                key: 5,
                name: 'Emirate',
                value: 'Emirate'
            },
            {
                key: 6,
                name: 'Medical District',
                value: 'Medical District'
            },
            {
                key: 7,
                name: 'Establishment Type',
                value: 'Establishment Type'
            },
            {
                key: 8,
                name: 'Establishment Specialities',
                value: 'Establishment Specialities'
            },
            {
                key: 9,
                name: 'Website',
                value: 'Website'
            },
            {
                key: 10,
                name: 'Phone',
                value: 'Phone'
            },
            {
                key: 11,
                name: 'Fax',
                value: 'Fax'
            },
            {
                key: 12,
                name: 'Email',
                value: 'Email'
            },
        ];

        return (
            <div className="card-holder">
                <Card size="small" title="Main Establishment Information" className="details-holder" loading={loading}>
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
                <Card size="small" title="Building Information" className="details-holder" loading={loading}>
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
                <Card size="small" title="Contact Information" className="details-holder" loading={loading}>
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

export default EstablishmentDetails;
