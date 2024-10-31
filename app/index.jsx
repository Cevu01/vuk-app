// import { StatusBar } from "expo-status-bar";
// import { Text, View, ScrollView, Image } from "react-native";
// import { Redirect, router } from "expo-router";
// import "../global.css";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { images } from "../constants";
// import CustomButton from "../components/CustomButton";

// export default function app() {
//   return (
//     <SafeAreaView className="bg-primary h-full ">
//       <ScrollView contentContainerStyle={{ height: "100%" }}>
//         <View className="w-full justify-center  items-center  px-4">
//           <Image
//             source={images.logo}
//             className="w-[130px] h-[84px]  "
//             resizeMode="contain"
//           />
//           <Image
//             source={images.cards}
//             className="max-w-[380px] w-full h-[300px]"
//             resizeMode="contain"
//           />

//           <View className="relative mt-5">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless Possibilities with{" "}
//               <Text className="text-secondary-200">Aora</Text>
//             </Text>
//             <Image
//               source={images.path}
//               className="w-[136px] h-[15px] absolute -bottom-3 -right-8"
//               resizeMode="contain"
//             />
//           </View>
//           <Text className="text-sm font-pregular text-gray-100 mt-9 text-center flex-wrap">
//             Where creativity meets inovation: embark on a journey with limitless
//             exploration with Aora
//           </Text>
//           <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles="w-full mt-7"
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function app() {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center ">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] my-6" // Added vertical margin for spacing
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px] mb-8" // Added bottom margin
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center leading-8">
              {" "}
              {/* Adjusted line height for readability */}
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-3 -right-8"
              resizeMode="contain"
            />
          </View>

          <View>
            <Text className="text-base font-pregular text-gray-200 mt-5 text-center px-4">
              Where creativity meets innovation: embark on a journey with
              limitless exploration with Aora
            </Text>
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-11/12 mt-8 bg-secondary-200 py-3 " // Adjusted width, background color, padding, and rounded corners
            textStyles="text-lg font-semibold text-primary text-center" // Styled button text
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
