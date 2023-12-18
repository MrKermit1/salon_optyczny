import React from "react";
import {User} from "@nextui-org/react";
import guy from '../../assets/guy.png'

export default function UserNav(props) {
  return (
    <User   
      name={props.name}
      description={props.desc}
      avatarProps={{
        src: "https://medesthetic.yonelle.pl/wp-content/uploads/2019/02/user-account-icon_82574.png"
      }}
    />
  );
}
