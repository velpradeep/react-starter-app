import React, {Component} from 'react';
import { Form, Input, Radio, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/owner-details-form.scss';

class OwnerDetailsForm extends Component {
    onFinish = values => {
    };

    render() {
        return (
            <Form
                name="owner_details"
                className="owner-details-form"
                onFinish={this.onFinish}
            >
                <Row>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="first_name"
                            label="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your First Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="middle_name"
                            label="Middle Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Middle Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Middle Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="family_name"
                            label="Family Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Family Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Family Name" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="nationality"
                            label="Nationality"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Nationality!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nationality" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="emirate"
                            label="Emirate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Emirate!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Emirate" />
                        </Form.Item>
                    </Col>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="phone"
                            label="Phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="fax"
                            label="Fax"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Fax!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Fax" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="partner_share_percentage"
                            label="Partner share Percentage"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Percentage"!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Percentage" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="gender"
                            label="Gender"
                            rules={[
                                { required: true },
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default OwnerDetailsForm;
