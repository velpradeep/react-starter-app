import React, {Component} from 'react';
import { Form, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/building-information-form.scss';

class BuildingInformationForm extends Component {
    onFinish = values => {
    };

    render() {
        return (
            <Form
                name="building_information"
                className="building-information-form"
                onFinish={this.onFinish}
            >
                <Row>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="building_name"
                            label="Building Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Building Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Building Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="building_no"
                            label="Building NO"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Building NO!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Building NO" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="emirates"
                            label="Emirates"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Emirates!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Emirates" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="address"
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Address!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Address" />
                        </Form.Item>
                    </Col>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="street"
                            label="Street"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Street!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Street" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="area"
                            label="Area"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Area!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Area" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="po_box"
                            label="PO Box."
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your PO Box!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="PO Box" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="google_map_url"
                            label="Google Map URL"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Google Map URL"!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Google Map URL" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default BuildingInformationForm;
