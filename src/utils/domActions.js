const removeChildWithinParent = (parent, child) => {
    const childNode = document.getElementById(child);
    if (parent.contains(childNode)) {
      parent.removeChild(childNode);
    }
  };
  
  const addTabContent = (parent, child, component) => {
    const childNode = document.getElementById(child);
    if (!parent.contains(childNode)) {
      parent.appendChild(component);
    }
  };

  export {removeChildWithinParent, addTabContent}