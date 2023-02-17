import React from "react";
import { Segment, Icon, Dropdown } from "semantic-ui-react";

const Horzonatal = () => {
  const trigger = (
    <span>
      <Icon name="user" /> Admin
    </span>
  );

  const options = [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>Admin</strong>
        </span>
      ),
      disabled: true,
    },
    { key: "profile", text: "Your Profile" },
    { key: "Logout", text: "Logout" },
  ];

  return (
    <div>
      <Segment inverted textAlign="right" color="blue" size="massive">
        <Dropdown
          direction="right"
          color="blue"
          trigger={trigger}
          options={options}
        />
      </Segment>
    </div>
  );
};

export default Horzonatal;
