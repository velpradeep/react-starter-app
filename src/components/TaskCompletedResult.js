import React, { Component } from 'react';
import { Result, Button } from 'antd';

class TaskCompletedResult extends Component {
    render() {
        return (
            <Result
                status="success"
                title="Thank you!!"
                subTitle="Task has been completed Successfully"
                extra={[
                    <Button key="ok">Ok</Button>,
                ]}
            />
        );
    }
}

export default TaskCompletedResult;
