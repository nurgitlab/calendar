import {FC} from "react";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import FormItem from "antd/es/form/FormItem";

export const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
        />
      </Form.Item>
      <Form.Item
        label={"Дата события"}
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker/>
      </Form.Item>
      <Form.Item
        label={"Дата события"}
        name="date"
        rules={[rules.required()]}
      >
        <Select>

        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}