import {
  Button,
  Select,
  Form,
  Input,
  FormItem,
  Container,
  Aside,
  Menu,
  Submenu,
  Header
} from 'element-ui';

export default (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(Select.name, Select);
  Vue.component(Form.name, Form);
  Vue.component(Input.name, Input);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Container.name, Container);
  Vue.component(Aside.name, Aside);
  Vue.component(Menu.name, Menu);
  Vue.component(Submenu.name, Submenu);
  Vue.component(Header.name, Header);
};
