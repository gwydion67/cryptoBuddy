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
            style={index == selected ? styles.selectedStyle : {marginLeft: '1vw',marginRight: '1vw'}}
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
    <>
      <div style={styles.container} >
        <img onClick={() => {console.log('hi'); setActive(0)}} height={60} src="/Logo.png" /> 
        <NavButtons buttons={buttons} selected={active} setSelected={setActive} />
        <FaRegUserCircle onClick={handleProfilePress} size={28} />
      </div>
      <div style={styles.separator} />
    </>
  )
}

export default Navbar;

const styles = Stylesheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedStyle: {
    paddingLeft : '1vw',
    paddingRight : '1vw',
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
  },
  separator:{
    height: 1,
    backgroundColor: 'rgba(200,200,200,0.4)',
    width: '95%',
    margin:'auto',
    marginBottom: 15,
    marginTop: 15,
  }

})
