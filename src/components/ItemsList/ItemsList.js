import React from "react";
import "./ItemsList.css";
import withCollapse from "../../hoc/withCollapse";
import Button from "../Button/Button";
class ItemsList extends React.Component {
  render() {
    const { color } = this.props;
    const { isCollapsed } = this.props;
    const { toggle } = this.props;
    const displayType = isCollapsed ? "none" : "block";
    return (
      <>
        <Button color={color} onClick={toggle}>
          Collapse
        </Button>
        <ul style={{ display: displayType }}>
          <li className="item" style={{ backgroundColor: color }}>
            <p>Doc1</p>
          </li>
          <li className="item" style={{ backgroundColor: color }}>
            <p>Doc2</p>
          </li>
          <li className="item" style={{ backgroundColor: color }}>
            <p>Doc3</p>
          </li>
          <li className="item" style={{ backgroundColor: color }}>
            <p>Doc4</p>
          </li>
        </ul>
      </>
    );
  }
}

export default withCollapse(ItemsList);
