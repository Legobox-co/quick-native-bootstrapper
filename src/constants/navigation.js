import Colors from "../../native-base-theme/variables/commonColor";

export default {
  navbarProps: {
    navigationBarStyle: { 
		backgroundColor: "#F9A084", 
		borderBottomWidth: 0
	},
	navBarButtonColor: "#fff",
    titleStyle: {
      color: Colors.inverseTextColor,
	  alignSelf: "center",
	  justifyContent: "center",
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase
    },
    backButtonTintColor: Colors.inverseTextColor
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: "rgba(255,255,255,0.1)",
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.brandPrimary }
  },

  icons: {
    style: { color: "white" }
  }
};
