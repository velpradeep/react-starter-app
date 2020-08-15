import React, {Component} from 'react';
import { Form, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/main-establishment-information-form.scss';

class MainEstablishmentInformationForm extends Component {
    onFinish = values => {
    };

    render() {
        return (
            <Form
                name="main_establishment_information"
                className="main-establishment-information-form"
                onFinish={this.onFinish}
            >
                <Row>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="establishment_name_en"
                            label="Establishment Name (English)"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Establishment Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Establishment Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="establishment_name_ar"
                            label="Establishment Name (Arabic)"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Establishment Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Establishment Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="category"
                            label="Category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Category!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Choose" />
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

export default MainEstablishmentInformationForm;
