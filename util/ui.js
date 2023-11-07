export const defaultToastObj = {
    type: "success",
    position: "top",
    text1: "Deleted item",
    text2: `Associations if any deleted successfully`,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    onShow: () => console.log("Toast shown"),
    onHide: () => console.log("Toast hidden"),
    onPress: () => console.log("Toast pressed"),
  };