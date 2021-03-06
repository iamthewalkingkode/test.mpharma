import { Button, Form, Input, message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';


const ProductForm = (props) => {

    const { visible, product } = props;

    const [form] = Form.useForm();

    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('post');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (product.id) {
            setTitle(`Edit product`);
            setMethod('put');
            form.setFieldsValue(product);
        } else {
            setTitle(`Add new product`);
            setMethod('post');
            form.setFieldsValue({});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product]);

    const submit = (v) => {
        if (method === 'post') {
            props.createProduct(v);
            message.success(`${v.name} added to products`);
            close();
        } else {
            v['id'] = product.id;
            props.updateProduct(v);
            message.success(`${v.name} has been updated`);
            close();
        }
    }

    const close = () => {
        setSubmitting(false);
        form.resetFields();
        props.onCancel();
    }

    return (
        <React.Fragment>
            <Modal visible={visible} title={title} onCancel={close} footer={null} maskClosable={false}>
                <Form form={form} layout="vertical" onFinish={submit}>
                    <Form.Item colon={false} label="Name" name="name" rules={[{ required: true, message: 'This field is required' }]}>
                        <Input autoComplete="off" size="large" autoFocus disabled={submitting} />
                    </Form.Item>

                    <Form.Item colon={false} label="Price" name="price" rules={[{ required: method === 'post' ? true : false, message: 'This field is required' }]}>
                        <Input type="number" autoComplete="off" size="large" step={0.01} disabled={submitting} />
                    </Form.Item>

                    <div className="divider"></div>

                    <div>
                        <div className="float-left">
                            <Button type="default" size="large" onClick={close}>Close</Button>
                        </div>
                        <div className="float-right">
                            <Button type="primary" size="large" htmlType="submit">Save</Button>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </Form>
            </Modal>
        </React.Fragment>
    );
}

export default ProductForm;