import React, { MouseEventHandler } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Menu, MenuItemProps, MenuProps } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";

const StyledWorkshopMenu = styled((props: MenuProps) => <Menu {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      minWidth: 180,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
      },
    },
  })
);

export interface WorkshopMenuProps {
  id: string;
  children:
    | React.ReactElement<MenuItemProps>
    | React.ReactElement<MenuItemProps>[];
}

export const WorkshopMenu: React.FunctionComponent<WorkshopMenuProps> = ({
  id,
  children,
}) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: `workshop-menu-${id}`,
  });

  const handleMenuItemClick =
    (eventHandler?: MouseEventHandler) => (event: React.MouseEvent) => {
      popupState.close();

      if (eventHandler) {
        eventHandler(event);
      }
    };

  return (
    <>
      <IconButton aria-label="settings" {...bindTrigger(popupState)}>
        <MoreVertIcon />
      </IconButton>
      <StyledWorkshopMenu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        {...bindMenu(popupState)}
      >
        {React.Children.map(
          children,
          (child: React.ReactElement<MenuItemProps>) => {
            return React.cloneElement(child, {
              onClick: handleMenuItemClick(child.props.onClick),
            });
          }
        )}
      </StyledWorkshopMenu>
    </>
  );
};
