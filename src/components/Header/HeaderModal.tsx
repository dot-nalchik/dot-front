import React, {forwardRef} from 'react';
import {Box, Dialog, Slide} from "@mui/material";
import styles from "./HeaderModal.module.css";
import {TransitionProps} from "@mui/material/transitions";
import clsx from "clsx";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderModalProps {
  open: boolean;
  changeModalState: () => void;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HeaderModal = ({open, changeModalState}: HeaderModalProps) => {
  return (
      <Dialog
          className={styles.dialog}
          fullScreen
          open={open}
          onClose={changeModalState}
          TransitionComponent={Transition}
      >
        <Box className={styles.modal_box}>
          <div className={styles.logos}>
              <CloseIcon onClick={changeModalState} className={styles.close_btn}/>
          </div>
          <div
              className={clsx(styles.deep_menu)}
              onClick={changeModalState}>
            <a
                href="#projects"
                className={clsx(styles.deep_menu_link)}
            >
              <button className={styles.text_lg}>Проекты</button>
            </a>
            <a
                href="#contacts"
                className={clsx(styles.deep_menu_link)}
            >
              <button className={styles.text_lg}>Контакты</button>
            </a>
            <a
                href="#request"
                className={clsx(styles.deep_menu_link)}
            >
              <button className={styles.text_lg}>Заявка</button>
            </a>
          </div>
        </Box>
      </Dialog>
  );
};

export default HeaderModal;
