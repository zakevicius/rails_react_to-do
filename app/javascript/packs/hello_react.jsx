// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react"
import ReactDOM from "react-dom"
import { Button, DatePicker, Switch, TimePicker, version } from "antd";

const HelloReact = (props) => {
  return (
    <React.Fragment>
      <h1>Ant Design version: {version}</h1>
      <div>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
      <div style={{ marginTop: 16 }}>
        <TimePicker size="large" />
        <Switch checkedChildren={ props.checked } unCheckedChildren={ props.unchecked } style={{ marginLeft: 8 }} />
      </div>
    </React.Fragment>
  )
}

export default HelloReact

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloReact />,
    document.body.appendChild(document.createElement('div')),
  )
})
