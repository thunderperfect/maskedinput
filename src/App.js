import { Form, Button } from "antd";
import dayjs from "dayjs";
import ReactJson from "react-json-view";
import DateInput from "./DateInput";
export default function App() {
  const [form] = Form.useForm();
  const formVals = {
    itlDate: dayjs().format("MM/DD/YYYY")
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="App">
      <Form
        form={form}
        initialValues={formVals}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item name="itlDate" label="ITL Date">
          <DateInput />
        </Form.Item>
        <Button
          onClick={(e) => {
            console.log("clicked");
            form.setFieldValue("itlDate", "");
          }}
        >
          Reset
        </Button>
        <Button htmlType="submit">Submit</Button>
      </Form>
      <ReactJson src={form.getFieldsValue(true)} />
    </div>
  );
}
