import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { closeSideDrawer } from "../../redux/slices/uiSlice";

const navMenu = [
  { display: "Ships", url: "ships" },
  { display: "Equipments", url: "equipments" },
];

const ListItemLink = ({ icon, primary, to }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

const SideDrawer = () => {
  const sideDrawerOpen = useSelector((state) => state.ui.sideDrawerOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="left"
      open={sideDrawerOpen}
      onClose={() => dispatch(closeSideDrawer())}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => dispatch(closeSideDrawer())}
      >
        <List>
          {navMenu.map((item) => (
            <ListItemLink key={item.url} to={item.url} primary={item.display} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
