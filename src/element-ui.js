import {
  Button,
  Select,
  Form,
  Input,
  FormItem
} from 'element-ui';

export default (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(Select.name, Select);
  Vue.component(Form.name, Form);
  Vue.component(Input.name, Input);
  Vue.component(FormItem.name, FormItem);
};
