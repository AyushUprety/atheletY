import React, { useContext } from "react"
import Partitem from "./Partitem"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { Box, Typography } from "@mui/material"
import RightArrowIcon from "../assets/assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/assets/icons/left-arrow.png"
import { Stack } from "@mui/system"

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  )
}
const Scrollbar = ({ bodyParts, bodyPart, setBodyPart }) => {
  return (
    // return garna birseko thiyis ani display nai vako thiyana
    <ScrollMenu>
      {bodyParts.map((item) => (
        <Box key={item.id}>
          <Partitem bodyPart={bodyPart} setBodyPart={setBodyPart} item={item} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default Scrollbar
