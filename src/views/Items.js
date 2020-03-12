import React from "react";
import GridItem from "../components/GridItem/GridItem";
import "./Items.css";
import Collapse from "../providers/Collapse";
import Button from "../components/Button/Button";
import Auth from "../providers/Auth";
class Items extends React.Component {
  state = {
    itemsList: [
      {
        id: 1,
        heading: "Header 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros in nisl sollicitudin sagittis. Etiam mollis convallis mauris, vitae auctor enim. Donec arcu turpis, posuere et nisi sit amet, hendrerit faucibus sapien. Nunc in nulla ornare, pulvinar massa eu, elementum ex. Nam aliquam iaculis laoreet. Fusce dictum eget ante ac blandit."
      },
      {
        id: 2,
        heading: "Header 2",
        content:
          "Maecenas molestie nunc eu nisi interdum, a laoreet elit tristique. Quisque sed tortor in augue cursus efficitur eu ut metus. Donec eget nibh maximus eros convallis congue vitae sit amet ligula. Etiam commodo ante eget ultricies commodo. Nunc et iaculis mauris. Nulla facilisi. Nunc nec sapien justo. Fusce sit amet libero ligula."
      },
      {
        id: 3,
        heading: "Header 3",
        content:
          "Maecenas molestie nunc eu nisi interdum, a laoreet elit tristique. Quisque sed tortor in augue cursus efficitur eu ut metus. Donec eget nibh maximus eros convallis congue vitae sit amet ligula. Etiam commodo ante eget ultricies commodo. Nunc et iaculis mauris. Nulla facilisi. Nunc nec sapien justo. Fusce sit amet libero ligula."
      },
      {
        id: 4,
        heading: "Header 4",
        content:
          "Maecenas molestie nunc eu nisi interdum, a laoreet elit tristique. Quisque sed tortor in augue cursus efficitur eu ut metus. Donec eget nibh maximus eros convallis congue vitae sit amet ligula. Etiam commodo ante eget ultricies commodo. Nunc et iaculis mauris. Nulla facilisi. Nunc nec sapien justo. Fusce sit amet libero ligula."
      },
      {
        id: 5,
        heading: "Header 5",
        content:
          "Maecenas molestie nunc eu nisi interdum, a laoreet elit tristique. Quisque sed tortor in augue cursus efficitur eu ut metus. Donec eget nibh maximus eros convallis congue vitae sit amet ligula. Etiam commodo ante eget ultricies commodo. Nunc et iaculis mauris. Nulla facilisi. Nunc nec sapien justo. Fusce sit amet libero ligula."
      },
      {
        id: 6,
        heading: "Header 6",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros in nisl sollicitudin sagittis. Etiam mollis convallis mauris, vitae auctor enim. Donec arcu turpis, posuere et nisi sit amet, hendrerit faucibus sapien. Nunc in nulla ornare, pulvinar massa eu, elementum ex. Nam aliquam iaculis laoreet. Fusce dictum eget ante ac blandit."
      },
      {
        id: 7,
        heading: "Header 7",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros in nisl sollicitudin sagittis. Etiam mollis convallis mauris, vitae auctor enim. Donec arcu turpis, posuere et nisi sit amet, hendrerit faucibus sapien. Nunc in nulla ornare, pulvinar massa eu, elementum ex. Nam aliquam iaculis laoreet. Fusce dictum eget ante ac blandit."
      }
    ]
  };

  render() {
    return (
      <Auth
        render={({ isAuthorized, toggleAuth }) => (
          <Collapse
            render={({ isCollapsed, toggle }) => {
              const displayType = isCollapsed ? "none" : "grid";
              return (
                <>
                  <Button color="#c3a5d8" onClick={toggle}>
                    Click me
                  </Button>
                  <Button color="#c3a5d8" onClick={toggleAuth}>
                    {isAuthorized ? "Logout" : "Log in"}
                  </Button>
                  {isAuthorized && (
                    <div
                      className="grid-wrapper"
                      style={{ display: displayType }}
                    >
                      {this.state.itemsList.map(item => (
                        <GridItem
                          heading={item.heading}
                          content={item.content}
                          key={item.id}
                        />
                      ))}
                    </div>
                  )}
                </>
              );
            }}
          />
        )}
      />
    );
  }
}

export default Items;
