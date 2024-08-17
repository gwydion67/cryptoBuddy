import Stylesheet from "reactjs-stylesheet";
import {FaRegUserCircle} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";



const NavButtons = ({ selected, setSelected, buttons }) => {
  const navigate = useNavigate();

  const handlePress = (goto) => {
    setSelected(goto);
  };

  return (
    <div style={styles.list} >
      {buttons.map((item, index) => (
        <div>
          <p
            style={index == selected ? styles.selectedStyle : {marginLeft: 10,marginRight: 10}}
            onClick={() => handlePress(index)}
          >
            {item}
          </p>
          {index == selected ? (
            <motion.div layoutId="selected" style={styles.underline} />
          ): <div style={{height: 3}} />}
        </div>
      ))}
    </div>
  );

};

const Navbar = ({active, setActive, buttons}) => {

  const handleProfilePress = () => {
    setActive("3");
  }

  return (
    <div style={styles.container} >
      <img height={60} src="/Logo.png" /> 
      <NavButtons buttons={buttons} selected={active} setSelected={setActive} />
      <FaRegUserCircle onClick={handleProfilePress} size={28} />
    </div>
  )
}

export default Navbar;

const styles = Stylesheet.create({
  container: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedStyle: {
    paddingLeft : 10,
    paddingRight : 10,
    color: 'white',
    fontWeight: 500,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  underline: {
    position: 'relative',
    top: -10,
    height: 3,
    backgroundColor: 'yellow',
    borderRadius: 15,
  }

})
