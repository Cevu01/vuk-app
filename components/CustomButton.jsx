// import { TouchableOpacity, Text } from "react-native";
// import React from "react";

// const CustomButton = ({
//   title,
//   handlePress,
//   containerStyles,
//   textStyles,
//   isLoading,
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       activeOpacity={0.7}
//       className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
//         isLoading ? "opacity-50" : ""
//       }`}
//       disabled={isLoading}
//     >
//       <Text
//         className={`text-primary font-psemibold text-lg text-center ${textStyles}`}
//       >
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;

import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8} // Slightly increased opacity for subtle feedback
      className={`bg-secondary-200  min-h-[62px] px-6 py-3 justify-center items-center rounded-2xl
        ${isLoading ? "opacity-60" : "opacity-100"} ${containerStyles}`}
      disabled={isLoading}
    >
      <Text
        className={`text-primary font-semibold text-lg text-center ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
