import React from "react";



/*
  Creates a div group to be included on the page layout.
  @param groupNum: The number corresponding to this group
  @param divs: The child divs associated with this group
  type groupNum: Number
  type divs: [Object]
  return: A JSX expression for the group to be created
  rtype: Object
*/
function createGroup(groupNum, divs) {
  return (
    <div id={ "group"+groupNum }>
      { divs.map( (divInfo) => { return createGroupDiv(groupNum, divInfo) }) }
    </div>
  );
}


/*
  Creates a div element that is a child of some div group.
  @param groupNum: The number of the group the div is a child of.
  @param divInfo: An Object whose keys are the div's
                  number (dNum) and the div's classNames
                  (classNames), if any
  type groupNum: Number
  type divInfo: Object
  return: A JSX expression for the div to be created
  rtype: Object
*/
function createGroupDiv(groupNum, divInfo) {
  return (
    <div key={ "g"+groupNum+"_d"+divInfo["dNum"] }
         id={ "d"+divInfo["dNum"] }
         className={ divInfo['classNames'] ? divInfo['classNames'] : "" } >
      <span className="center_text">{divInfo["dNum"]}</span>
    </div>
  );
}



export {
  createGroup,
  createGroupDiv
};
