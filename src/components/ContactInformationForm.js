import React, {Component} from 'react';
import { Form, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../styles/contact-information-form.scss';

class ContactInformationForm extends Component {
    onFinish = values => {
    };

    render() {
        return (
            <Form
                name="contact_information"
                className="contact-information-form"
                onFinish={this.onFinish}
            >
                <Row>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="contact_name"
                            label="Contact Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Contact Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Contact Name" />
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
                    </Col>
                    <Col span={12} className="form-sub-child">
                        <Form.Item
                            labelCol={{ span: 24 }}
                            name="contact_number"
                            label="Contact Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Contact Number!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Contact Number" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactInformationForm;
